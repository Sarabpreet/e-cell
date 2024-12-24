import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const teamMembers = [
  {
    name: "Ashutosh Swain",
    role: "Chairperson",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQFhXMuGyXGwqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708528663186?e=1740009600&v=beta&t=ATI85z_xhg1dSN08rB-k6zE3oo_j6doMAlrTktzBu8w",
    message: "Ideas are easy,Execution is everything",
    linkedin: "https://linkedin.com/in/ashutosh-swain-ecell",
    instagram: " https://www.instagram.com/itzswain/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Durgesh Hegde",
    role: "Deputy Chairperson",
 photo: "https://media.licdn.com/dms/image/v2/D4D03AQHxgBDJWVyCSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708283162218?e=1740009600&v=beta&t=52PJGdxYPSIgckbOeLZ6eq2UePtZf1rARRYZac2DkBY"                                  ,
    message: "it always seems impossible until its done.",
    linkedin: "linkedin.com/in/durgesh-hegde-82291925a",
    instagram: "https://www.instagram.com/durgeshhegde/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Abhimanyu Singh",
    role: "Deputy Chairperson",
     photo: "https://media.licdn.com/dms/image/v2/D4D03AQEBZNZChkerLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726084727731?e=1740009600&v=beta&t=INmE6R0CmrJTmrJp-7rlFvyg0uCpKvWibkx9M6GLNXw"           ,
    message: "Mindset is what seperates the best from the rest",
    linkedin: "linkedin.com/in/abhimanyu-singh-chouhan-375b10251",
    instagram: "https://www.instagram.com/_abhimanyu0103_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Mudit gupta",
    role: "Startup guidance and development",
 photo: "https://media.licdn.com/dms/image/v2/D5635AQGkpAZ--WlZew/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1734768684506?e=1735419600&v=beta&t=AQ_qBnSae45_SPhf74jrCYlwxr2VaBZeuIOXSFC-TYM",
    message: "The best way to predict future is to create it.",
    linkedin: "linkedin.com/in/mudit-gupta-92a8891b3",
    instagram: "https://www.instagram.com/_mudit_gupta__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Aaryav Jain",
    role: "Startup Guidance and Development",
 photo: "https://media.licdn.com/dms/image/v2/D4D03AQG8G1ojOQNPaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687979559932?e=1740009600&v=beta&t=gfNSJD9P9S8kpZkTemyuLkYL_JMyx5Z2doMiH_TIBQA",
    message: "If oppurtunities dosen't come knocking,build a door",
    linkedin: "linkedin.com/in/aaryav-jain-400107235",
    instagram: " https://www.instagram.com/j.aaryav/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Ayushi wadhwa",
    role: "Technical",
     photo: "https://media.licdn.com/dms/image/v2/D5603AQFlWYUNDSSopg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729778141178?e=1740009600&v=beta&t=IhDrFAy_u8Z490Jun_wBhfO9Gfqk-FZSR1r8L5ASM0U",
    message: "Keep learning keep growing.",
    linkedin: "linkedin.com/in/ayushi-wadhwa-",
    instagram: "https://www.instagram.com/ayushiw18/?utm_source=ig_web_button_share_sheet ",
  },
  {
    name: "Rishita Garg",
    role: "Technical",
     photo: "https://media.licdn.com/dms/image/v2/D5603AQEHb0kvCDU4kQ/profile-displayphoto-shrink_400_400/B56ZPDSihLHIAg-/0/1734148238051?e=1740009600&v=beta&t=N8Xh4CdBPD5TixnjK6ufeOeS6L_2DlC5LBi1qdiIR98",
    message: "Growth and comfort dosent coexist",
    linkedin: "linkedin.com/in/rishita-g",
    instagram: "https://www.instagram.com/rishitagarg19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ",
  },
  {
    name: "Saksham Goel",
    role: "Events and PR",
 photo: "https://media.licdn.com/dms/image/v2/D4D03AQH7okr5tmtGVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696229988425?e=1740009600&v=beta&t=nqzI_urjiZXLN2NAI93PM2J2ucA_bipIRlsKKZDy7rA",
    message: "Take the risk or loose the chance",
    linkedin: "linkedin.com/in/saksham-goel-254165270",
    instagram: "https://www.instagram.com/sakshamgoel2708/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Mahima Sharma",
    role: "Events and PR",
 photo: "https://media.licdn.com/dms/image/v2/D5603AQFCTWg4TKdVRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718241256453?e=1740009600&v=beta&t=eYOHTwYpJDL3HYPOFMKDQD8lLijHNknutaIPJXTyBis",
    message: "Sometimes u gotta risk it to make it",
    linkedin: "linkedin.com/in/mahima-sharma-71611a29a",
    instagram: "https://www.instagram.com/__mahimasharma_/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Shaurya Mittal",
    role: "Internal Relations& Resource management",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQHGJbGS-AAuUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700605436291?e=1740009600&v=beta&t=IghVjE7dWA5ug-PeV_8J_Ni4oTiJKkjbGBGUce-M5is"                    ,
    message: "Tough times dont last ,tough people do.",
    linkedin: "linkedin.com/in/shauryamittal06",
    instagram: "https://www.instagram.com/shauryamittal_06/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Arnav Samant",
    role: "Social media and graphics design",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFZejWvVQVHtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712861458744?e=1740009600&v=beta&t=Ckkqq658nL335rrzzgsod4i3bvDtMmBaEvH68_Bzhvc",
    message: "Those who give up will never know how close they were to success",
    linkedin: "linkedin.com/in/arnav-sawant-63a173249",
    instagram: "https://www.instagram.com/arnavsawant.19/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Sakshath Shetty",
    role: "Social media and graphics design",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQE5bXetpiBLsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726853577523?e=1740009600&v=beta&t=_WmR1TCtAvOJCfAyqrKZ8jZmReASWoxS8vQMkYoFzVU",
    message: "it is difficult but it is possible",
    linkedin: " linkedin.com/in/sakshath-shetty-212a25252",
    instagram: " https://www.instagram.com/sakshath_shetty__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Kritika Sinha",
    role: "Corporate and alumni relations",
     photo: "https://media.licdn.com/dms/image/v2/D5603AQGCoWvX1oSYcg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730400765348?e=1740009600&v=beta&t=dM7ygkdiKTJEEuba8Hd0lgBwapVB2CSC1Ro6oP7mPVQ",
    message: "Trusting the process fueled by Hardwork.",
    linkedin: "linkedin.com/in/kritika-sinha-14219824b ",
    instagram: " https://www.instagram.com/kkrityy_/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Aditya Nair",
    role: "Corporate and alumni relations",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQGf2gx2vnhErA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725806196618?e=1740009600&v=beta&t=eLTm2QVw-5TFCLOT5kVbanvDybm2cdPN4-cnfwz2w8k",
    message: "Believe u can and u are halfway there",
    linkedin: " linkedin.com/in/aditya-nair-bba57b270",
    instagram: " https://www.instagram.com/adityanair1904/?utm_source=ig_web_button_share_sheet",
  },
];

function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-gray-800 p-10">
      <h1 className="text-4xl font-bold text-center text-white mb-10 ">
        Meet the Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-lg border-4 border-gold-400 shadow-2xl overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-3xl"
          >
            {/* Photo */}
            <div className="relative overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mt-4 transition duration-300 "
              />
            </div>

            {/* Text Content */}
            <div className="relative bottom-0 w-full p-4 bg-opacity-80 bg-gray-900 text-center transition-colors duration-300 z-10 group-hover:bg-opacity-90">
              <h2 className="text-3xl font-semibold text-white tracking-wider">
                {member.name}
              </h2>
              <p className="text-yellow-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
   



export default MeetTheTeam;