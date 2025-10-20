import React, { useState, useMemo } from 'react';
import { ChevronDown, Plus, X, Calendar, BookOpen, GraduationCap, Menu } from 'lucide-react';

const courseData = {
  "courses": [
    {
      "id": "ACCT-110",
      "courseCode": "ACCT-110",
      "title": "Financial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "An introduction to financial reporting for corporations. Topics include the accounting cycle, financial statements, revenue recognition, and analysis of financial performance.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100,
      "perspective": "Ethical"
    },
    {
      "id": "ACCT-210",
      "courseCode": "ACCT-210",
      "title": "Managerial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Introduction to the use of accounting information by managers. Explores cost accounting, budgeting, performance evaluation, and strategic decision making.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "ACCT-305",
      "courseCode": "ACCT-305",
      "title": "The Accounting Profession",
      "department": "Accounting",
      "credits": 3,
      "description": "Examination of the accounting profession including ethics, professional standards, career paths, and contemporary issues facing accountants.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 300,
      "perspective": "Ethical"
    },
    {
      "id": "ACCT-360",
      "courseCode": "ACCT-360",
      "title": "Intermediate Financial Accounting I",
      "department": "Accounting",
      "credits": 3,
      "description": "In-depth study of financial reporting standards, including revenue recognition, cash and receivables, inventory, and property, plant, and equipment.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall"],
      "level": 300
    },
    {
      "id": "ACCT-365",
      "courseCode": "ACCT-365",
      "title": "Intermediate Financial Accounting II",
      "department": "Accounting",
      "credits": 3,
      "description": "Continuation of ACCT-360 covering long-term liabilities, stockholders' equity, earnings per share, and statement of cash flows.",
      "prerequisites": ["ACCT-360"],
      "terms": ["Spring"],
      "level": 300
    },
    {
      "id": "ACCT-420",
      "courseCode": "ACCT-420",
      "title": "Personal and Small Business Taxation",
      "department": "Accounting",
      "credits": 3,
      "description": "Federal income taxation of individuals and small businesses including sole proprietorships, partnerships, and S corporations.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "ACCT-430",
      "courseCode": "ACCT-430",
      "title": "Cost Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Advanced study of cost systems, cost behavior analysis, budgeting, variance analysis, and performance measurement.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MGMT-101",
      "courseCode": "MGMT-101",
      "title": "Business 1: Introduction to Business",
      "department": "Management",
      "credits": 3,
      "description": "Introduction to business communication, planning, and analysis. Develops foundational skills for business professionals.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-102",
      "courseCode": "MGMT-102",
      "title": "Business 2: Business Planning and Professional Development",
      "department": "Management",
      "credits": 3,
      "description": "Continuation of MGMT-101 focusing on business planning, professional development, and career readiness.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-215",
      "courseCode": "MGMT-215",
      "title": "Organizational Behavior",
      "department": "Management",
      "credits": 3,
      "description": "Study of individual and group behavior in organizations. Topics include motivation, leadership, team dynamics, and organizational culture.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200,
      "perspective": "Social"
    },
    {
      "id": "MGMT-360",
      "courseCode": "MGMT-360",
      "title": "Digital Entrepreneurship",
      "department": "Management",
      "credits": 3,
      "description": "Explores entrepreneurship in the digital age, including business model innovation, lean startup methodologies, and digital venture creation.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGMT-560",
      "courseCode": "MGMT-560",
      "title": "Strategic Management",
      "department": "Management",
      "credits": 3,
      "description": "Capstone course integrating functional areas of business. Develops skills in strategic analysis, planning, and implementation.",
      "prerequisites": ["MGMT-215", "MKTG-230", "FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 500
    },
    {
      "id": "MGIS-130",
      "courseCode": "MGIS-130",
      "title": "Information Systems & Technology",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to management information systems including systems thinking, data management, business processes, and the role of technology in organizations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGIS-230",
      "courseCode": "MGIS-230",
      "title": "Database Design and Applications",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to database concepts, design, and SQL. Students learn to design, implement, and query relational databases.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "MGIS-340",
      "courseCode": "MGIS-340",
      "title": "Emerging Business Technologies",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Examination of cutting-edge technologies and their business applications including AI, blockchain, IoT, and cloud computing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-360",
      "courseCode": "MGIS-360",
      "title": "Building a Web Business",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Development of e-commerce and web-based business applications. Covers web technologies, online business models, and digital marketing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-425",
      "courseCode": "MGIS-425",
      "title": "Systems Analysis and Design",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Methods for analyzing business requirements and designing information systems. Covers SDLC, agile methodologies, and system modeling.",
      "prerequisites": ["MGIS-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-230",
      "courseCode": "MKTG-230",
      "title": "Principles of Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Introduction to marketing concepts including market research, consumer behavior, segmentation, targeting, positioning, and the marketing mix.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200
    },
    {
      "id": "MKTG-310",
      "courseCode": "MKTG-310",
      "title": "Marketing Research",
      "department": "Marketing",
      "credits": 3,
      "description": "Methods for gathering and analyzing marketing data. Covers research design, sampling, data collection, and statistical analysis.",
      "prerequisites": ["MKTG-230", "STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300,
      "perspective": "Scientific Principles"
    },
    {
      "id": "MKTG-330",
      "courseCode": "MKTG-330",
      "title": "Global Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Marketing strategies for international markets. Covers cultural differences, global market entry, and international marketing mix decisions.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300,
      "perspective": "Global"
    },
    {
      "id": "MKTG-360",
      "courseCode": "MKTG-360",
      "title": "Professional Selling",
      "department": "Marketing",
      "credits": 3,
      "description": "Development of consultative selling skills including prospecting, needs analysis, presentation techniques, and relationship management.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-370",
      "courseCode": "MKTG-370",
      "title": "Advertising & Promotion Management",
      "department": "Marketing",
      "credits": 3,
      "description": "Integrated marketing communications including advertising, public relations, sales promotion, and direct marketing strategies.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300,
      "perspective": "Artistic"
    },
    {
      "id": "MKTG-410",
      "courseCode": "MKTG-410",
      "title": "Search Engine Marketing & Analytics",
      "department": "Marketing",
      "credits": 3,
      "description": "Digital marketing strategies focusing on SEO, SEM, web analytics, and data-driven marketing decision making.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-430",
      "courseCode": "MKTG-430",
      "title": "Social Media Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Strategic use of social media platforms for marketing purposes. Covers content strategy, community management, and social media analytics.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-489",
      "courseCode": "MKTG-489",
      "title": "Seminar in Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Capstone course integrating marketing concepts through case analysis, strategic planning, and applied projects.",
      "prerequisites": ["MKTG-310", "MKTG-330"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "FINC-220",
      "courseCode": "FINC-220",
      "title": "Corporate Finance",
      "department": "Finance",
      "credits": 3,
      "description": "Introduction to financial management including time value of money, capital budgeting, risk and return, and capital structure decisions.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200,
      "perspective": "Mathematics"
    },
    {
      "id": "FINC-320",
      "courseCode": "FINC-320",
      "title": "Professional Financial Management",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced financial management topics including working capital management, dividend policy, and corporate restructuring.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-352",
      "courseCode": "FINC-352",
      "title": "Financial Management II",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced corporate finance topics including mergers and acquisitions, international finance, and derivatives.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-362",
      "courseCode": "FINC-362",
      "title": "Intermediate Investments",
      "department": "Finance",
      "credits": 3,
      "description": "Analysis of investment vehicles including stocks, bonds, and portfolios. Covers valuation, risk management, and portfolio theory.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-460",
      "courseCode": "FINC-460",
      "title": "Financial Analysis and Modeling",
      "department": "Finance",
      "credits": 3,
      "description": "Development of financial models using Excel for valuation, forecasting, and decision analysis. Emphasis on practical applications.",
      "prerequisites": ["FINC-320"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "HSPT-210",
      "courseCode": "HSPT-210",
      "title": "Introduction to Hospitality Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Overview of the hospitality industry including lodging, food service, tourism, and event management sectors.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200,
      "wellness": true
    },
    {
      "id": "HSPT-320",
      "courseCode": "HSPT-320",
      "title": "Hotel Operations Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Management of hotel operations including front office, housekeeping, food and beverage, and property management systems.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "HSPT-340",
      "courseCode": "HSPT-340",
      "title": "Event Planning and Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Planning and execution of meetings, conferences, and special events. Covers budgeting, logistics, and vendor management.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "STAT-145",
      "courseCode": "STAT-145",
      "title": "Introduction to Statistics I",
      "department": "Statistics",
      "credits": 3,
      "description": "Descriptive statistics, probability, sampling distributions, confidence intervals, and hypothesis testing.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 100,
      "perspective": "Mathematics"
    },
    {
      "id": "STAT-146",
      "courseCode": "STAT-146",
      "title": "Introduction to Statistics II",
      "department": "Statistics",
      "credits": 3,
      "description": "Continuation of STAT-145 covering ANOVA, regression, chi-square tests, and nonparametric methods.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 100,
      "perspective": "Scientific Principles"
    },
    {
      "id": "DECS-310",
      "courseCode": "DECS-310",
      "title": "Operations Management",
      "department": "Decision Sciences",
      "credits": 3,
      "description": "Management of operations and supply chains including process analysis, quality management, inventory control, and project management.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "BANA-255",
      "courseCode": "BANA-255",
      "title": "Data Literacy, Analytics, and Decision Making",
      "department": "Business Analytics",
      "credits": 3,
      "description": "Introduction to data analysis for business decisions. Covers data visualization, descriptive analytics, and business intelligence tools.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "INTB-225",
      "courseCode": "INTB-225",
      "title": "Global Business Environment",
      "department": "International Business",
      "credits": 3,
      "description": "Analysis of the global business environment including economic, political, cultural, and legal factors affecting international operations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200,
      "perspective": "Global"
    },
    {
      "id": "BLEG-250",
      "courseCode": "BLEG-250",
      "title": "Law, Business, and Society",
      "department": "Business Law",
      "credits": 3,
      "description": "Legal and regulatory environment of business including contracts, torts, employment law, and business ethics.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200,
      "perspective": "Ethical"
    }
  ]
};

export default function RITCourseRegistration() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [schedules, setSchedules] = useState([{ id: 1, name: 'My Schedule', courses: [] }]);
  const [activeScheduleId, setActiveScheduleId] = useState(1);
  const [showNewScheduleInput, setShowNewScheduleInput] = useState(false);
  const [newScheduleName, setNewScheduleName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    department: 'All',
    level: 'All',
    credits: 'All',
    wellness: false,
    perspective: 'All'
  });

  const departments = ['All', ...new Set(courseData.courses.map(c => c.department))];
  const levels = ['All', '100', '200', '300', '400', '500'];
  const creditOptions = ['All', '3'];
  const perspectives = ['All', 'Ethical', 'Artistic', 'Global', 'Social', 'Natural Science Inquiry', 'Scientific Principles', 'Mathematics'];

  const filteredCourses = useMemo(() => {
    return courseData.courses.filter(course => {
      if (filters.department !== 'All' && course.department !== filters.department) return false;
      if (filters.level !== 'All' && Math.floor(course.level / 100) * 100 !== parseInt(filters.level)) return false;
      if (filters.credits !== 'All' && course.credits !== parseInt(filters.credits)) return false;
      if (filters.wellness && !course.wellness) return false;
      if (filters.perspective !== 'All' && course.perspective !== filters.perspective) return false;
      return true;
    });
  }, [filters]);

  const activeSchedule = schedules.find(s => s.id === activeScheduleId);

  const addCourseToSchedule = (course) => {
    setSchedules(schedules.map(schedule => {
      if (schedule.id === activeScheduleId) {
        if (!schedule.courses.find(c => c.id === course.id)) {
          return { ...schedule, courses: [...schedule.courses, course] };
        }
      }
      return schedule;
    }));
  };

  const removeCourseFromSchedule = (courseId) => {
    setSchedules(schedules.map(schedule => {
      if (schedule.id === activeScheduleId) {
        return { ...schedule, courses: schedule.courses.filter(c => c.id !== courseId) };
      }
      return schedule;
    }));
  };

  const createNewSchedule = () => {
    if (newScheduleName.trim()) {
      const newId = Math.max(...schedules.map(s => s.id)) + 1;
      setSchedules([...schedules, { id: newId, name: newScheduleName, courses: [] }]);
      setActiveScheduleId(newId);
      setNewScheduleName('');
      setShowNewScheduleInput(false);
    }
  };

  const deleteSchedule = (id) => {
    if (schedules.length > 1) {
      setSchedules(schedules.filter(s => s.id !== id));
      if (activeScheduleId === id) {
        setActiveScheduleId(schedules.find(s => s.id !== id).id);
      }
    }
  };

  const totalCredits = activeSchedule.courses.reduce((sum, course) => sum + course.credits, 0);
  
  const perspectivesMet = [...new Set(activeSchedule.courses.filter(c => c.perspective).map(c => c.perspective))];
  const hasWellness = activeSchedule.courses.some(c => c.wellness);

  const getCoursesByDay = () => {
    const days = { 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [] };
    activeSchedule.courses.forEach((course, index) => {
      const dayIndex = index % 5;
      const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      days[dayNames[dayIndex]].push(course);
    });
    return days;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#F76902] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap size={32} />
              <h1 className="text-2xl font-bold">RIT Course Registration</h1>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#da5c02] rounded"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-1 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sticky top-24">
              <h2 className="text-xl font-bold text-[#F76902] mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Filter Courses
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Department</label>
                  <select 
                    className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#F76902] focus:outline-none"
                    value={filters.department}
                    onChange={(e) => setFilters({...filters, department: e.target.value})}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Course Level</label>
                  <select 
                    className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#F76902] focus:outline-none"
                    value={filters.level}
                    onChange={(e) => setFilters({...filters, level: e.target.value})}
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level === 'All' ? 'All Levels' : `${level} Level`}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Credits</label>
                  <select 
                    className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#F76902] focus:outline-none"
                    value={filters.credits}
                    onChange={(e) => setFilters({...filters, credits: e.target.value})}
                  >
                    {creditOptions.map(credit => (
                      <option key={credit} value={credit}>{credit === 'All' ? 'All Credits' : `${credit} Credits`}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Perspective Requirement</label>
                  <select 
                    className="w-full p-2 border-2 border-gray-300 rounded focus:border-[#F76902] focus:outline-none"
                    value={filters.perspective}
                    onChange={(e) => setFilters({...filters, perspective: e.target.value})}
                  >
                    {perspectives.map(persp => (
                      <option key={persp} value={persp}>{persp}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <input 
                    type="checkbox"
                    id="wellness"
                    checked={filters.wellness}
                    onChange={(e) => setFilters({...filters, wellness: e.target.checked})}
                    className="w-4 h-4 accent-[#F76902]"
                  />
                  <label htmlFor="wellness" className="text-sm font-semibold text-gray-700 cursor-pointer">
                    Wellness Courses Only
                  </label>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 mb-2">Showing {filteredCourses.length} courses</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#F76902] mb-4">Available Courses</h2>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredCourses.map(course => (
                  <div 
                    key={course.id}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#F76902] transition-all cursor-pointer"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{course.courseCode}</h3>
                        <p className="text-gray-700 font-medium">{course.title}</p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="inline-block bg-[#009CBD] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{course.department}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Level {course.level}</span>
                      {course.perspective && (
                        <span className="text-xs bg-[#84BD00] text-white px-2 py-1 rounded font-semibold">{course.perspective}</span>
                      )}
                      {course.wellness && (
                        <span className="text-xs bg-[#7D55C7] text-white px-2 py-1 rounded font-semibold">Wellness</span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addCourseToSchedule(course);
                      }}
                      className="mt-3 w-full bg-[#F76902] hover:bg-[#da5c02] text-white py-2 rounded font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus size={18} />
                      Add to {activeSchedule.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#F76902]">My Schedules</h2>
            <button
              onClick={() => setShowNewScheduleInput(!showNewScheduleInput)}
              className="bg-[#84BD00] hover:bg-[#6fa000] text-white px-4 py-2 rounded font-semibold flex items-center gap-2 transition-colors"
            >
              <Plus size={18} />
              New Schedule
            </button>
          </div>

          {showNewScheduleInput && (
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Schedule name..."
                value={newScheduleName}
                onChange={(e) => setNewScheduleName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && createNewSchedule()}
                className="flex-1 p-2 border-2 border-gray-300 rounded focus:border-[#F76902] focus:outline-none"
              />
              <button
                onClick={createNewSchedule}
                className="bg-[#F76902] hover:bg-[#da5c02] text-white px-4 py-2 rounded font-semibold transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowNewScheduleInput(false);
                  setNewScheduleName('');
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          )}

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {schedules.map(schedule => (
              <div key={schedule.id} className="flex items-center gap-1">
                <button
                  onClick={() => setActiveScheduleId(schedule.id)}
                  className={`px-4 py-2 rounded font-semibold whitespace-nowrap transition-colors ${
                    activeScheduleId === schedule.id
                      ? 'bg-[#F76902] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {schedule.name}
                </button>
                {schedules.length > 1 && (
                  <button
                    onClick={() => deleteSchedule(schedule.id)}
                    className="p-1 hover:bg-red-100 rounded text-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar size={20} />
                {activeSchedule.name} - Course List
              </h3>
              
              <div className="bg-[#009CBD] text-white p-3 rounded-lg mb-4">
                <p className="font-bold text-lg">Total Credits: {totalCredits}</p>
                {hasWellness && (
                  <p className="text-sm mt-1">✓ Wellness Requirement Met</p>
                )}
                {perspectivesMet.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-semibold">Perspectives Met:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {perspectivesMet.map(persp => (
                        <span key={persp} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                          {persp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {activeSchedule.courses.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <BookOpen size={48} className="mx-auto mb-3 opacity-50" />
                  <p>No courses added yet. Browse courses above to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeSchedule.courses.map(course => (
                    <div key={course.id} className="border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{course.courseCode}</h4>
                          <p className="text-sm text-gray-700">{course.title}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{course.credits} Credits</span>
                            {course.perspective && (
                              <span className="text-xs bg-[#84BD00] text-white px-2 py-1 rounded">{course.perspective}</span>
                            )}
                            {course.wellness && (
                              <span className="text-xs bg-[#7D55C7] text-white px-2 py-1 rounded">Wellness</span>
                            )}
                          </div>
                          {course.prerequisites.length > 0 && (
                            <p className="text-xs text-gray-600 mt-2">
                              <span className="font-semibold">Prerequisites:</span> {course.prerequisites.join(', ')}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeCourseFromSchedule(course.id)}
                          className="ml-2 p-2 hover:bg-red-100 rounded text-red-600 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Schedule View</h3>
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                {Object.entries(getCoursesByDay()).map(([day, courses]) => (
                  <div key={day} className="border-b-2 border-gray-200 last:border-b-0">
                    <div className="bg-[#F76902] text-white px-4 py-2 font-bold">
                      {day}
                    </div>
                    <div className="p-3 bg-gray-50 min-h-[80px]">
                      {courses.length === 0 ? (
                        <p className="text-gray-400 text-sm italic">No classes scheduled</p>
                      ) : (
                        <div className="space-y-2">
                          {courses.map(course => (
                            <div key={course.id} className="bg-white border border-gray-300 rounded p-2">
                              <p className="font-semibold text-sm text-gray-900">{course.courseCode}</p>
                              <p className="text-xs text-gray-600">{course.title}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedCourse(null)}>
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-[#F76902]">{selectedCourse.courseCode}</h2>
                <h3 className="text-xl text-gray-900 font-semibold">{selectedCourse.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Department</p>
                <p className="text-gray-900">{selectedCourse.department}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Credits</p>
                <p className="text-gray-900">{selectedCourse.credits} credits</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Course Level</p>
                <p className="text-gray-900">Level {selectedCourse.level}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Description</p>
                <p className="text-gray-900">{selectedCourse.description}</p>
              </div>

              {selectedCourse.prerequisites.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Prerequisites</p>
                  <p className="text-gray-900">{selectedCourse.prerequisites.join(', ')}</p>
                </div>
              )}

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Terms Offered</p>
                <div className="flex gap-2">
                  {selectedCourse.terms.map(term => (
                    <span key={term} className="bg-[#009CBD] text-white px-3 py-1 rounded text-sm font-semibold">
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {(selectedCourse.perspective || selectedCourse.wellness) && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Requirements Met</p>
                  <div className="flex gap-2">
                    {selectedCourse.perspective && (
                      <span className="bg-[#84BD00] text-white px-3 py-1 rounded text-sm font-semibold">
                        {selectedCourse.perspective}
                      </span>
                    )}
                    {selectedCourse.wellness && (
                      <span className="bg-[#7D55C7] text-white px-3 py-1 rounded text-sm font-semibold">
                        Wellness
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                addCourseToSchedule(selectedCourse);
                setSelectedCourse(null);
              }}
              className="mt-6 w-full bg-[#F76902] hover:bg-[#da5c02] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add to {activeSchedule.name}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}