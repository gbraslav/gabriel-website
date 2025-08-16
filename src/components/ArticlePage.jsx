import React from 'react'
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

const ArticlePage = ({ article, onBack }) => {
  const handleShare = (platform) => {
    const url = window.location.href
    const text = `Check out this article: ${article.title}`
    
    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Gabriel Braslavsky</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-medium">Share:</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('linkedin')}
              className="hover:bg-blue-50"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleShare('twitter')}
              className="hover:bg-blue-50"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-slate-700 mb-8 font-medium leading-relaxed">
                {article.description}
              </div>
              
              <div className="space-y-6 text-slate-800 leading-relaxed">
                {article.content.map((section, index) => (
                  <div key={index}>
                    {section.type === 'heading' && (
                      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                        {section.text}
                      </h2>
                    )}
                    {section.type === 'paragraph' && (
                      <p className="mb-4 text-lg leading-relaxed">
                        {section.text}
                      </p>
                    )}
                    {section.type === 'list' && (
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg">{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.type === 'quote' && (
                      <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50 rounded-r-lg">
                        <p className="text-lg italic text-slate-700">{section.text}</p>
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Author Bio */}
        <Card className="mt-8 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                GB
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gabriel Braslavsky</h3>
                <p className="text-slate-600 mb-3">
                  Software Engineering Executive | CTO | Technology Leader
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Gabriel is a seasoned technology executive with extensive experience in building 
                  enterprise-level software solutions and leading high-performance teams. As CTO and 
                  co-founder of Conversabridge, he focuses on AI/ML automation for small business 
                  optimization. Previously, he led teams of 170+ FTEs and 250+ contractors at Global 
                  Payments, generating $200M+ in revenue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card className="mt-8 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">More Articles</h3>
            <div className="text-slate-600">
              <p>More insights on technology leadership and innovation coming soon.</p>
              <Button 
                variant="outline" 
                onClick={onBack}
                className="mt-4"
              >
                View All Articles
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ArticlePage

