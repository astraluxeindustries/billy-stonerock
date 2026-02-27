import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Billy Stonerock" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Billy Stonerock
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Billy is proud to call Anchorage home. Born in Alaska and raised in upstate New York, he ultimately felt the pull back to the place that shaped him. In 2008, he returned to Anchorage, drawn by the natural beauty, strong community, and the simple joy of long summer evenings gathered around a campfire with friends and family.
              </p>
              <p>
                Today, Billy channels that same sense of connection and belonging into helping Alaskan families achieve homeownership. He understands that buying a home is more than a transaction. It is a milestone, an investment, and a foundation for the future. Before entering the mortgage industry, Billy spent 15 years in retail leadership, where he developed a reputation for building meaningful relationships, leading with integrity, and creating environments where people felt supported and valued. Those years shaped his client-first philosophy and sharpened his ability to navigate complex decisions with clarity and confidence.
              </p>
              <p>
                As a mortgage consultant with First Rate Financial, Billy provides strategic guidance tailored to each client’s unique financial picture. Whether working with first-time homebuyers, seasoned homeowners, or families relocating within Alaska, he focuses on education, transparency, and proactive communication at every step of the lending process.
              </p>
              <p>
                Outside of work, Billy has a deep passion for sports, whether playing, coaching, or cheering from the sidelines. He believes sports reflect what he values most in business: teamwork, discipline, and shared success. Billy’s mission is simple. To provide steady guidance, honest advice, and a seamless mortgage experience so you can move forward with certainty.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
