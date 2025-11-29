import { Button } from '@/components/ui/button.jsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

export default function PersonalPage({ hobbies = [], onBack }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Personal</p>
          <h1 className="text-2xl font-bold">Beyond the Resume</h1>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to main site
        </Button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">What keeps me energized</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A quick look at the pursuits that sharpen my focus, build resilience, and bring a bit of fun to the week.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby) => (
            <Card key={hobby.title} className="h-full">
              <CardHeader>
                <CardTitle>{hobby.title}</CardTitle>
                {hobby.subtitle && <CardDescription>{hobby.subtitle}</CardDescription>}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{hobby.description}</p>
                {hobby.link && (
                  <Button
                    asChild
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <a
                      href={hobby.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hobby.link.label}
                    </a>
                  </Button>
                )}
                {hobby.highlights?.length > 0 && (
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    {hobby.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {hobby.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {hobby.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}

