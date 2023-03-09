## Deploy with Vercel

The Vercel deployment will guide you through creating a Supabase account and project. After installing the Supabase integration, you'll need to configure Stripe with a few simple steps.

To get started, click the "Deploy with Vercel" button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fgrannybter%2Fcore-kit&project-name=core-kit&repo-name=core-kit&demo-title=Core%20Kit&demo-description=Demo%20project&demo-url=https%3A%2F%2Fdemo.corekit.lol&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv&external-id=nextjs-subscription-payments)

[![Screenshot of Vercel deployment](./public/vercel-deploy.png)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fgrannybter%2Fcore-kit&project-name=core-kit&repo-name=core-kit&demo-title=Core%20Kit&demo-description=Demo%20project&demo-url=https%3A%2F%2Fdemo.corekit.lol&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv&external-id=nextjs-subscription-payments)

After deploying the project, follow the configuration steps provided below.

During the initial build, an error will occur due to the absence of Stripe environment variables. Once you have configured Stripe, redeploy the application.

## Configure Supabase Auth

#### Setup redirect wildcards for deploy previews

For auth redirects (magic links, OAuth providers) to work correctly in deploy previews, navigate to the auth settings (i.e. `https://app.supabase.com/project/:project-id/auth/url-configuration`) and add the following wildcard URL to "Redirect URLs": `https://**vercel.app/*/*`.

You can read more about redirect wildcard patterns in the [docs](https://supabase.com/docs/guides/auth#redirect-urls-and-wildcards).

#### [Optional] - Set up OAuth providers

You can use third-party login providers like GitHub or Google. Refer to the [docs](https://supabase.io/docs/guides/auth#third-party-logins) to learn how to configure these. Once configured you can add them to the `provider` array of the `Auth` component on the [`signin.tsx`](./pages/signin.tsx) page.

## Configure Stripe

In order to begin developing your SaaS application, it is necessary to set up Stripe to process test payments. To ensure successful completion of the subsequent steps, please ensure that you have activated the "Test Mode" toggle as outlined in [Stripe's documentation](https://stripe.com/docs/testing).

### Configure webhook

It is necessary to set up the webhook depicted in the architecture diagram above, as this component serves as the bridge connecting Stripe to your Vercel Serverless Functions.

1. Click the "Add Endpoint" button on the [test Endpoints page](https://dashboard.stripe.com/test/webhooks).
1. Set the endpoint URL to `https://your-deployment-url.vercel.app/api/webhooks`.
1. Click `Select events` under the `Select events to listen to` heading.
1. Click `Select all events` in the `Select events to send` section.
1. Copy `Signing secret` as we'll need that in the next step.

### Set environment variables

To securely interact with Stripe, we need to add a few [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) in the Vercel dashboard.

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET_LIVE`

You can find the first two keys on the [API keys tab](https://dashboard.stripe.com/test/apikeys) in Stripe. The `STRIPE_WEBHOOK_SECRET_LIVE` is the `Signing secret` copied in the previous webhook configuration step.

### Redeploy

To ensure that the most up-to-date environment variables are in place, it is necessary to redeploy the application. 

You can achieve this by navigating to the deployments tab, locating your deployment, and selecting the "redeploy" option.

### Create product and pricing information

For Stripe to automatically bill your users for recurring payments, you need to create your product and pricing information in the [Stripe Dashboard](https://dashboard.stripe.com/test/products). When you create or update your product and price information, the changes automatically sync with your Supabase database.

Stripe Checkout currently supports pricing that bills a predefined amount at a specific interval. More complex plans (e.g., different pricing tiers or seats) are not yet supported.

For example, you can create business models with different pricing tiers, e.g.:

- **Product 1**: Hobby
  - Price 1: 10 USD per month
  - Price 2: 100 USD per year
- **Product 2**: Freelancer
  - Price 1: 20 USD per month
  - Price 2: 200 USD per year
- **Product 3**: Professional
  - Price 1: 30 USD per month
  - Price 2: 300 USD per year
- **Product 4**: Expert
  - Price 1: 50 USD per month
  - Price 2: 500 USD per year
  

#### Generate test data with the Stripe CLI

The [Stripe CLI](https://stripe.com/docs/stripe-cli#install) `fixtures` command executes a series of API requests defined in a JSON file. To speed up the setup, we have added a [fixtures file](fixtures/stripe-fixtures.json) to bootstrap test product and pricing data in your Stripe account. Simply run `stripe fixtures fixtures/stripe-fixtures.json`.

**Important:** Be sure to start the webhook forwarding (see below) so that the products created by the fixtures command above are imported into your database.

### Configure the Stripe customer portal

1. Set your custom branding in the [settings](https://dashboard.stripe.com/settings/branding)
1. Configure the Customer Portal [settings](https://dashboard.stripe.com/test/settings/billing/portal)
1. Toggle on "Allow customers to update their payment methods"
1. Toggle on "Allow customers to update subscriptions"
1. Toggle on "Allow customers to cancel subscriptions"
1. Add the products and prices that you want
1. Set up the required business information and links

### Generate types from your Supabase database

You can use the [Supabase CLI](https://supabase.com/docs/reference/cli/usage#supabase-gen-types-typescript) to generate types from your Database by running

```bash
supabase gen types typescript --db-url "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres" > types_db.ts
```

### That's it

That's it. Now you're ready to earn recurring revenue from your customers 🥳

## Going live

### Archive testing products

Archive all test mode Stripe products before going live. Before creating your live mode products, make sure to follow the steps below to set up your live mode env vars and webhooks.

### Configure production environment variables

To run the project in live mode and process payments with Stripe, modify the environment variables from Stripe "test mode" to "production mode." After switching the variables, be sure to redeploy the application.

To verify you are running in production mode, test checking out with the [Stripe test card](https://stripe.com/docs/testing). The test card should not work.

### Redeploy

Afterward, you will need to rebuild your production deployment for the changes to take effect. Within your project Dashboard, navigate to the "Deployments" tab, select the most recent deployment, click the overflow menu button (next to the "Visit" button) and select "Redeploy."

## Develop locally

Deploying with Vercel will create a repository for you, which you can clone to your local machine.

Next, use the [Vercel CLI](https://vercel.com/download) to link your project:

```bash
vercel login
vercel link
```

### Setting up the env vars locally

Use the Vercel CLI to download the development env vars:

```bash
vercel env pull .env.local
```

Running this command will create a new `.env.local` file in your project folder. For security purposes, you will need to set the `SUPABASE_SERVICE_ROLE_KEY` manually from your [Supabase dashboard](https://app.supabase.io/) (Settings > API). Lastly, the webhook secret differs for local testing vs. when deployed to Vercel. Follow the instructions below to get the corresponding webhook secret.

### Use the Stripe CLI to test webhooks

First [install the CLI](https://stripe.com/docs/stripe-cli) and [link your Stripe account](https://stripe.com/docs/stripe-cli#login-account).

Next, start the webhook forwarding:

```bash
stripe listen --forward-to=localhost:3000/api/webhooks
```

Running this Stripe command will print a webhook secret (such as, `whsec_***`) to the console. Set `STRIPE_WEBHOOK_SECRET` to this value in your `.env.local` file.

### Install dependencies and run the Next.js client

```bash
npm install
npm run dev
# or
yarn
yarn dev
```
## Common Setup Issues

### Stripe products not getting pulled into supabase

If your Stripe products are not showing up on your website, it is most likely an issue with your Supabase project or your Stripe webhooks. First, check to see if the tables in your Supabase project have been created. If they have not, you need to copy the contents of [schema.sql](schema.sql) and paste them into a new query in the SQL editor in Supabase. Run the query and check to make sure that the tables have been created successfully.

If your tables were created successfully when initializing the Supabase project and your products are still not showing up, then the problem most likely lies in your Stripe webhooks. If you have cloned the project in the past, this could cause issues with listening on the same ports as your previous project. If you previously listened on port 3000, try running your project and listening on port 3001 instead.