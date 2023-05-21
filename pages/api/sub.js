export default function subscribe(req, res) {
    try {
        res.status(200).json({ message: 'working!' })
    } catch (error) {
        res.status(405).json({ message: 'not working' })
    }

    // if (req.method === 'GET') {
    //     res.status(200).json({ message: 'works' })
    // } else res.status(405).json({ message: 'not working' })
}