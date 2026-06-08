
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/landing/PageLayout';
import { Target, Heart, Zap, Globe } from 'lucide-react';

const MISSION_IMAGE = 'https://media.db.com/images/public/6a2382d47f6f3ef5ee2d09b4/d4f0ad0ff_generated_72b7874a.png';

const values = [
{
  icon: Target,
  title: 'Purposeful Learning',
  description: 'Every lesson, game, and challenge on EconFlow is designed with a clear educational objective. We combine pedagogy with play to create lasting knowledge.',
  color: 'purple'
},
{
  icon: Heart,
  title: 'Radical Accessibility',
  description: 'Financial education should never cost money to access. EconFlow is and will always be completely free for every student, everywhere in the world.',
  color: 'green'
},
{
  icon: Zap,
  title: 'Student-First Design',
  description: 'Built by students who lived through the gaps in financial education, every decision we make is filtered through one question: does this serve the learner?',
  color: 'purple'
},
{
  icon: Globe,
  title: "Closing the Gap",
  description: "Millions of students graduate without basic financial knowledge. EconFlow exists to change that, one student at a time.",
  color: 'green'
}];

export default function MissionPage() {
  return (
    <PageLayout>
      <section className="relative min-h-screen py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-500/6 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-medium text-purple-300 mb-6">
              <Target size={14} />
              Our Mission
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Bridging the <span className="gradient-text-purple">Financial Literacy</span> Gap
            </h1>
            
          </motion.div>

     
          {/* Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 sm:p-12 mb-16 text-center">
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              EconFlow was created with a singular vision: to make financial education accessible, engaging,
              and impactful for every student, regardless of background or location. We believe that financial
              literacy is not a privilege. It is a fundamental life skill.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
              Through gamified learning experiences, real-world simulations, and a global community of young
              learners, we are building a future where every teenager enters adulthood equipped with the
              knowledge to manage, grow, and protect their finances.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">Built by students, for students. EconFlow is a testament to what the next generation can achieve when given the tools and the trust. Our platform has grown from a small idea into a global movement spanning multiple countries, driven entirely by passionate students who care deeply about financial literacy.

            </p>
          </motion.div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              const isPurple = val.color === 'purple';
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card glass-card-hover rounded-2xl p-6">
                  
                  <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center ${isPurple ? 'bg-purple-500/10' : 'bg-green-500/10'}`}>
                    <Icon size={20} className={isPurple ? 'text-purple-400' : 'text-green-400'} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.description}</p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>
    </PageLayout>);

}