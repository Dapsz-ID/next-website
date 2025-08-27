import users from '@/data/users.json'
export default function handler(req,res){ if(req.method!=='GET') return res.status(405).json({message:'Method not allowed'}); const safe = users.map(({password,...u})=>u); res.status(200).json(safe) }
