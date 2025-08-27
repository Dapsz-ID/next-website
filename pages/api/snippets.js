import snippets from '@/data/snippets.json'
export default function handler(req,res){ if(req.method!=='GET') return res.status(405).json({message:'Method not allowed'}); res.status(200).json(snippets) }
