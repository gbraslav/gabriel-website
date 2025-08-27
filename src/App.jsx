import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import ArticlePage from './components/ArticlePage.jsx'
import { articles } from './data/articles.js'
import { 
  Menu, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Users, 
  TrendingUp, 
  Award, 
  Mic,
  Calendar,
  BookOpen,
  Rss,
  X
} from 'lucide-react'
import './App.css'

// Import background images
import techBg1 from './assets/bg_option1.jpg'
import techBg2 from './assets/techBg2.jpg'
import teamCollaboration from './assets/teamCollaboration.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleReadArticle = (articleId) => {
    const article = articles.find(a => a.id === articleId)
    setSelectedArticle(article)
    setCurrentView('article')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedArticle(null)
  }

  // Show article page if an article is selected
  if (currentView === 'article' && selectedArticle) {
    return <ArticlePage article={selectedArticle} onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">Gabriel Braslavsky</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('reading-list')} className="text-foreground hover:text-primary transition-colors">Reading List</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-foreground hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection('articles')} className="text-foreground hover:text-primary transition-colors">Articles</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('reading-list')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Reading List</button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Experience</button>
                <button onClick={() => scrollToSection('skills')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Skills</button>
                <button onClick={() => scrollToSection('education')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Education</button>
                <button onClick={() => scrollToSection('articles')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Articles</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

 
      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90"
          style={{
            backgroundImage: `url(${techBg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Gabriel Braslavsky
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Software Engineering Executive | Technologist | CTO
              </p>
            </div>
            
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
              Dynamic, results-oriented, creative, and highly technical business technology leader with vast experience 
              and the proven ability to successfully direct technology solutions, people, and large-scale projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                onClick={() => scrollToSection('experience')}
              >
                View Experience
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://www.linkedin.com/in/gbraslavsky/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/gbraslav/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:gbraslavsky@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A seasoned technology executive with expertise in building enterprise-level software solutions 
              and leading high-performance teams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Core Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Strategy & Planning',
                      'Innovation',
                      'Solutions Delivery',
                      'Digital Transformation',
                      'Cloud Native Applications',
                      'Team Building',
                      'Product Management',
                      'Leadership'
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="justify-center py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Led teams of 170 FTEs + 250 contractors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span>Generated $200M+ in revenue</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mic className="h-5 w-5 text-purple-600" />
                    <span>AWS re:Invent 2022 Speaker</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-600" />
                    <span>US Patent Holder</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={teamCollaboration} 
                alt="Team Collaboration" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              A track record of transforming technology organizations and delivering results
            </p>
          </div>

          <div className="space-y-8">
            {/* Experience 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Chief Technology Officer (CTO)</h3>
                    <p className="text-lg text-primary font-medium">Conversabridge, Atlanta, GA</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">02/2024 – 07/2025</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  CTO and co-founder of Conversabridge, a Generative AI/ML auto-agent that maximizes small-business 
                  efficiency and owner productivity, by automating and completing day-to-day tasks.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Leading the Engineering and Product Management teams</li>
                  <li>Created a market-ready product running in Pilot stage</li>
                  <li>Focus on AI/ML automation for small business optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Senior Vice President (SVP) of Software Development</h3>
                    <p className="text-lg text-primary font-medium">Global Payments, Atlanta, GA</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">08/2018 - 02/2024</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Modernized Issuer Solutions (legacy TSYS) core products, including Authorization, Fraud, Risk, 
                  Originations, Tokenization, and SaaS tools.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designed scalable solution handling 10K transactions-per-second in 150ms latency</li>
                  <li>Managed 700 million active cardholder accounts</li>
                  <li>Led team of 170 FTEs and 250 contractors</li>
                  <li>Replaced legacy mainframe products with AWS-native offerings</li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Vice President (VP) of Software Development</h3>
                    <p className="text-lg text-primary font-medium">MedAssets | nThrive, Alpharetta, GA</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">04/2011 - 07/2018</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Led the Charge Integrity software development group, composed of 60 software developers and 
                  quality assurance engineers over seven development teams.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Generated $200M+ revenue for Charge Integrity group</li>
                  <li>Drove product innovation and next-generation product design</li>
                  <li>Achieved significant scalability and performance improvements</li>
                  <li>Raised employee engagement results by 20%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology stack and leadership capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Platforms */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">☁</span>
                  </div>
                  <span>Cloud Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Azure'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI & Machine Learning */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🤖</span>
                  </div>
                  <span>AI & Machine Learning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Machine Learning', 'LLM', 'MCP'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Languages */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">💻</span>
                  </div>
                  <span>Programming Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'C#', 'C++', 'React'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Architecture & DevOps */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">🏗</span>
                  </div>
                  <span>Architecture & DevOps</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Kafka', 'API Gateways', 'Design Patterns', 'DevOps'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics & Visualization */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold">📊</span>
                  </div>
                  <span>Analytics & Visualization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Looker', 'Data Analytics'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leadership Skills */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">👥</span>
                  </div>
                  <span>Leadership Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Team Building', 'Product Management', 'Strategy'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation and professional credentials
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Education */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Bachelor of Science (BSc), Computer Science</h4>
                        <p className="text-muted-foreground">Tel-Aviv University, Tel-Aviv, Israel</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Bachelor of Science (BSc), Industrial Engineering</h4>
                        <p className="text-muted-foreground">Tel-Aviv University, Tel-Aviv, Israel</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Certifications & Awards */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications & Awards</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">AWS Certified Cloud Practitioner</h4>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">AWS Certified AI Practitioner</h4>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Awards</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>Circle of Excellence, Global Payments</li>
                          <li>Executive talent program, MedAssets</li>
                          <li>Divisional MVP award at HP (top 1%)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                        <p className="text-muted-foreground">Fluent in English, Hebrew, and Spanish, with Limited French</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Patent</h4>
                        <p className="text-muted-foreground">US Patent# 20090288070 A1 - Maintenance for Automated Software Testing</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-foreground mb-2">Speaking Engagement</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-muted-foreground">AWS re:Invent 2022 Speaker</span>
                          <a 
                            href="https://www.youtube.com/watch?v=7WMtVj12W1U" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Articles & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing thoughts on technology leadership, innovation, and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                    The Future of AI in Enterprise Software Development
                  </h3>
                  
                  <p className="text-muted-foreground">
                    Exploring how artificial intelligence and machine learning are transforming the way we build, 
                    deploy, and maintain enterprise software solutions. From automated code generation to 
                    intelligent monitoring systems, AI is reshaping our industry.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">Enterprise</Badge>
                    <Badge variant="secondary">Software Development</Badge>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleReadArticle('ai-enterprise-software-development')}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>February 28, 2024</span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                    Building High-Performance Engineering Teams in the Cloud Era
                  </h3>
                  
                  <p className="text-muted-foreground">
                    Lessons learned from scaling engineering organizations from startup to enterprise. 
                    Key strategies for hiring, retention, and creating a culture of innovation while 
                    maintaining operational excellence in cloud-native environments.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Leadership</Badge>
                    <Badge variant="secondary">Team Building</Badge>
                    <Badge variant="secondary">Cloud</Badge>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleReadArticle('building-high-performance-teams')}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More articles coming soon. Stay tuned for insights on technology leadership and innovation.
            </p>
            <Button variant="outline">
              <Rss className="h-4 w-4 mr-2" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

     {/* Reading List Section */}
     <section id="reading-list" className="pt-20 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Reading List</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A few recommended reads I often share with teams and peers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Leadership</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  High Output Management — Andrew Grove
                </h3>
                <p className="text-muted-foreground">Timeless principles for building effective engineering orgs.</p>
                <a
                  href="https://andrewgrove.com/high-output-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Systems</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Designing Data-Intensive Applications — Martin Kleppmann
                </h3>
                <p className="text-muted-foreground">Modern fundamentals for scalable, reliable software systems.</p>
                <a
                  href="https://dataintensive.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Culture</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Accelerate — Forsgren, Humble, Kim
                </h3>
                <p className="text-muted-foreground">Research-backed practices that drive engineering performance.</p>
                <a
                  href="https://itrevolution.com/accelerate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Personal Effectiveness</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Atomic Habits — James Clear
                </h3>
                <p className="text-muted-foreground">A practical framework for building good habits and breaking bad ones.</p>
                <a
                  href="https://jamesclear.com/atomic-habits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Leadership</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  The Hard Thing About Hard Things — Ben Horowitz
                </h3>
                <p className="text-muted-foreground">Real-world lessons on building and running a startup as CEO.</p>
                <a
                  href="https://a16z.com/books/the-hard-thing-about-hard-things/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to discuss your next technology challenge or opportunity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <a href="mailto:gbraslavsky@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          gbraslavsky@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-muted-foreground">770-596-5552</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-red-600" />
                        <span className="text-muted-foreground">Bethesda, MD</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Professional Links</h4>
                      <div className="flex flex-col space-y-2">
                        <a 
                          href="https://www.linkedin.com/in/gbraslavsky/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span>LinkedIn</span>
                        </a>
                        <a 
                          href="https://github.com/gbraslav/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
                    <p className="text-muted-foreground">
                      I'm always interested in discussing new opportunities, technology challenges, 
                      and innovative solutions. Whether you're looking for executive leadership, 
                      technical consulting, or strategic guidance, I'd love to hear from you.
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'CTO Leadership',
                          'Digital Transformation',
                          'Cloud Architecture',
                          'AI/ML Strategy',
                          'Team Building',
                          'Product Development'
                        ].map((area) => (
                          <Badge key={area} variant="outline">{area}</Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.location.href = 'mailto:gbraslavsky@gmail.com'}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Gabriel Braslavsky. Software Engineering Executive & CTO.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, Tailwind CSS, and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

