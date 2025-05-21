import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Search, X } from 'lucide-react';
import JobApplicationForm from '../components/JobApplicationForm';

const JOBS = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    description: "We're looking for an experienced Full Stack Developer to join our growing team...",
    requirements: [
      'Minimum 5 years of experience with modern web technologies',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure/GCP)',
      'Excellent problem-solving and communication skills'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100,000 - $150,000',
    description: 'Seeking a DevOps Engineer to help build and maintain our cloud infrastructure...',
    requirements: [
      'Experience with CI/CD pipelines',
      'Knowledge of containerization and orchestration',
      'Strong scripting abilities',
      'Infrastructure as Code experience'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    description: 'Join our design team to create beautiful and intuitive user experiences...',
    requirements: [
      'Portfolio demonstrating UI/UX projects',
      'Proficiency in Figma and design tools',
      'Understanding of user-centered design principles',
      'Experience with design systems'
    ]
  }
];

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null);

  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = ['All', ...new Set(JOBS.map(job => job.department))];

  const openApplicationForm = (job: typeof JOBS[0]) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeApplicationForm = () => {
    setSelectedJob(null);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {selectedJob ? (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Apply for a Position</h1>
                <button
                  onClick={closeApplicationForm}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              <JobApplicationForm jobTitle={selectedJob.title} jobId={selectedJob.id.toString()} />
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-600">
                  Join Our Team
                </h1>
                <p className="text-lg text-gray-700">
                  Build the future of technology with us. Explore our current openings and find your next opportunity.
                </p>
              </motion.div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => openApplicationForm(job)}
                    className="mt-4 md:mt-0 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div>
                  <h3 className="font-bold mb-3">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No positions found matching your criteria.</p>
            </div>
          )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobsPage;