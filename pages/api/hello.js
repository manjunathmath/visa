import connectdb from "@/utils/connectdb"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
connectdb();
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
