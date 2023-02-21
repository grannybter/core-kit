import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

import GitHub from 'components/icons/GitHub';

type Props = {
  date: string;
}

const DatePage: NextPage<Props> = ({ date }) => {
  const lastCommitDate = moment(date);
  const formattedDate = lastCommitDate.fromNow();

  return <div>Last commit {formattedDate}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const owner = "spazick";
  const repo = "nextjs-subscription-starter";
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });

  const { commit: { author: { date } } } = response.data[0];
  return { props: { date } };
};


export default function LastCommit() {
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    async function getDate() {
      const response = await fetch('/api/recent-commit');
      const data = await response.json();
      setDate(data.date);
    }
    getDate();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-2 sm:px-6 sm:py-0 lg:px-8">
        <div className="flex justify-center relative isolate overflow-hidden bg-gray-900 shadow-2xl sm:rounded-3xl lg:flex lg:gap-x-20">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#5046e5" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto text-center flex justify-center lg:mx-0 lg:flex-auto py-8">
            <div className="pr-4 pt-1">
              <GitHub/> 
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white sm:text-2xl">
              <DatePage date={date}/>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
