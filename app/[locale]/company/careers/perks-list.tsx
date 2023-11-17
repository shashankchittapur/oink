import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

const perks = [
    {
        "title": "Healthcare",
        "description": "We offer a comprehensive benefits package that includes medical, vision and dental coverage for employees and their families. We also offer life insurance, 401(k) match, paid time off, commuter benefits and a parental leave policy.",
    },
    {
        "title": "Flexible work hours",
        "description": "We believe in a healthy work-life balance, so we offer flexible work hours and the ability to work from home.",
    },
    {
        "title": "Team events",
        "description": "We have a monthly team event, including happy hours, team dinners, and movie nights.",
    },
    {
        "title": "Stock options",
        "description": "We provide stock options to all employees.",
    },
    {
        "title": "Remote work",
        "description": "We offer the ability to work remotely for all employees.",
    },
    {
        "title": "Growth opportunities",
        "description": "We offer a variety of opportunities for growth, including a mentorship program, internal training, and a professional development budget.",
    },
]

export default function PerksList() {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
            {perks.map((perk) => (
                <Card key={perk.title} title={perk.title}>
                    <CardHeader title={perk.title}>
                        <CardContent><p className="text-lg font-bold">{perk.title} </p></CardContent>
                    </CardHeader>
                    <CardContent>
                        <p>{perk.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}