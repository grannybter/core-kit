import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const owner = "spazick";
    const repo = "nextjs-subscription-starter";
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });
  
    const { commit: { author: { date } } } = response.data[0];
    res.status(200).json({ date });
  }
