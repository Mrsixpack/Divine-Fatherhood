'use client'

import { type ProgramSyllabusProps } from '@/types'
import { CalendarDays, Crown } from 'lucide-react'

export function ProgramSyllabus({ weeks, modules }: ProgramSyllabusProps) {
  return (
    <section className="df-section-sm">
      <div className="df-container">
        <div className="text-center mb-12">
          <Crown className="h-12 w-12 text-df-gold mx-auto mb-4" />
          <h2 className="df-heading df-h2 df-crown-glow mb-4">
            Program Structure
          </h2>
          <p className="df-body-lg text-df-white/90">
            {weeks} weeks of focused transformation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module, index) => {
              const [weekTitle, content] = module.split(' — ')
              
              return (
                <div key={index} className="df-card">
                  <div className="flex items-start gap-4">
                    <div className="bg-df-gold text-df-bg rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="df-heading text-lg text-df-gold mb-2 flex items-center gap-2">
                        <CalendarDays className="h-5 w-5" />
                        {weekTitle}
                      </h3>
                      
                      <p className="text-df-white/90">
                        {content || module}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}