import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const teamMembers = [
  {
    name: "Ashutosh Swain",
    role: "Chairperson",
    photo: "https://i.ibb.co/C1fMXWQ/k.png",
    message: "Ideas are easy,Execution is everything",
    linkedin: "https://www.linkedin.com/in/alicewalker",
    instagram: "https://www.instagram.com/alicewalker",
  },
  {
    name: "Durgesh Hegde",
    role: "Deputy Chairperson",
    photo: "https://i.ibb.co/VHpZrd6/l.png",
    message: "it always seems impossible until its done.",
    linkedin: "https://www.linkedin.com/in/johnsmith",                                        
    instagram: "https://www.instagram.com/johnsmith",
  },
  {
    name: "Abhimanyu Singh",
    role: "Deputy Chairperson",
    photo: "https://i.ibb.co/7RRkzDY/m.png",
    message: "Mindset is what seperates the best from the rest",
    linkedin: "https://www.linkedin.com/in/janedoe",
    instagram: "https://www.instagram.com/janedoe",
  },
  {
    name: "Mudit gupta",
    role: "Startup guidance and development",
    photo: "https://i.ibb.co/PxmJmk6/l.png",
    message: "The best way to predict future is to create it.",
    linkedin: "https://www.linkedin.com/in/mikebrown",
    instagram: "https://www.instagram.com/mikebrown",
  },
  {
    name: "Aaryav Jain",
    role: "Startup Guidance and Development",
    photo: "https://i.ibb.co/Y8ksrNq/n.png",
    message: "If oppurtunities dosen't come knocking,build a door",
    linkedin: "https://www.linkedin.com/in/sarahconnor",
    instagram: "https://www.instagram.com/sarahconnor",
  },
  {
    name: "Ayushi wadhwa",
    role: "Technical",
    photo: "https://i.ibb.co/vH0cnLm/k.png",
    message: "Keep learning keep growing.",
    linkedin: "https://www.linkedin.com/in/emilywhite",
    instagram: "https://www.instagram.com/emilywhite",
  },
  {
    name: "Rishita Garg",
    role: "Technical",
    photo: "https://i.ibb.co/PGm1wk3/m.png",
    message: "Growth and comfort dosent coexist",
    linkedin: "https://www.linkedin.com/in/davidlee",
    instagram: "https://www.instagram.com/davidlee",
  },
  {
    name: "Saksham Goel",
    role: "Events and PR",
    photo: "https://i.ibb.co/tb04bYg/j.png",
    message: "Take the risk or loose the chance",
    linkedin: "https://www.linkedin.com/in/sophiablack",
    instagram: "https://www.instagram.com/sophiablack",
  },
  {
    name: "Mahima Sharma",
    role: "Events and PR",
    photo: "https://i.ibb.co/F4kNjDM/l.png",
    message: "Sometimes u gotta risk it to make it",
    linkedin: "https://www.linkedin.com/in/mikebrown",
    instagram: "https://www.instagram.com/mikebrown",
  },
  {
    name: "Shaurya Mittal",
    role: "Internal Relations& Resource management",
    photo: "https://i.ibb.co/9GFKpCH/m.png",
    linkedin: "https://www.linkedin.com/in/sarahconnor",
    instagram: "https://www.instagram.com/sarahconnor",
  },
  {
    name: "Arnav Sawant",
    role: "Social media and graphics design",
    photo: "https://i.ibb.co/mBzRTCm/d.png",
    message: "Those who give up will never know how close they were to success",
    linkedin: "https://www.linkedin.com/in/emilywhite",
    instagram: "https://www.instagram.com/emilywhite",
  },
  {
    name: "Sakshath Shetty",
    role: "Social media and graphics design",
    photo: "https://i.ibb.co/whGdXcw/c.png",
    message: "it is difficult but it is possible",
    linkedin: " ",
    instagram: " ",
  },
  {
    name: "Kritika Sinha",
    role: "Corporate and alumni relations",
    photo: "https://i.ibb.co/DDSNKFm/h.png",
    message: "Trusting the process fueled by Hardwork.",
    linkedin: " ",
    instagram: " ",
  },
  {
    name: "Aditya Nair",
    role: "Corporate and alumni relations",
    photo: "https://i.ibb.co/0J8RNzT/h.png",
    message: "Believe u can and u are halfway there",
    linkedin: " ",
    instagram: " ",
  },
];
function MeetTheTeam() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white-500 p-10">
        <h1 className="text-4xl font-bold text-center text-black mb-10">Meet the Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-blue-300 rounded-lg border-4 border-blue shadow-lg overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden">
  <img
    src={member.photo}
    alt={member.name}
    className="w-full h-80 object-contain transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:z-20"
  />
</div>


              {/* Text Content */}
              <div className="relative bottom-0 w-full p-4 bg-opacity-80 bg-blue-500 text-center transition-colors duration-300 z-10 group-hover:bg-opacity-90">
                <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                <p className="text-black">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MeetTheTeam;
