const sampleUsers = [
    // 1. @AliceJohnson
    {
        name: "Alice Johnson",
        skills_needed: ["JavaScript", "Data Science"],
        certified_in: ["Cybersecurity", "Python"],
        currentJob: "Working as a Data Analyst",
        email: "alice.johnson@example.com",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 2. @EthanCarter
    {
        name: "Ethan Carter",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["JavaScript", "Cloud Architecture"],
        currentJob: "Studying Computer Science",
        email: "ethan.carter@example.com",
        image: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 3. @OliviaMartinez
    {
        name: "Olivia Martinez",
        skills_needed: ["Cloud Architecture", "JavaScript"],
        certified_in: ["Frontend Development", "Cybersecurity"],
        currentJob: "Cloud Solutions Consultant",
        email: "olivia.martinez@example.com",
        image: "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 4. @NoahRodriguez
    {
        name: "Noah Rodriguez",
        skills_needed: ["SQL", "Python"],
        certified_in: ["Data Science", "Big Data"],
        currentJob: "Senior Data Scientist",
        email: "noah.rodriguez@example.com",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 5. @EmmaKing
    {
        name: "Emma King",
        skills_needed: ["HTML or CSS", "Frontend Development"],
        certified_in: ["JavaScript", "Python"],
        currentJob: "Full Stack Developer",
        email: "emma.king@example.com",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 6. @LiamWright
    {
        name: "Liam Wright",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["JavaScript", "Cloud Architecture"],
        currentJob: "Mobile App Developer",
        email: "liam.wright@example.com",
        image: "https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 7. @AvaRobinson
    {
        name: "Ava Robinson",
        skills_needed: ["Ethical Hacking", "Python"],
        certified_in: ["Cybersecurity", "JavaScript"],
        currentJob: "Cybersecurity Consultant",
        email: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // image: "path/to/ava_robinson_image.jpg"
    },
    // 8. @LucasTurner
    {
        name: "Lucas Turner",
        skills_needed: ["Python", "AI"],
        certified_in: ["Data Science", "Machine Learning"],
        currentJob: "Blockchain Developer",
        email: "lucas.turner@example.com",
        image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 9. @SophiaWhite
    {
        name: "Sophia White",
        skills_needed: ["AI", "Machine Learning"],
        certified_in: ["Python", "JavaScript"],
        currentJob: "AI Researcher",
        email: "sophia.white@example.com",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 10. @JacksonScott
    {
        name: "Jackson Scott",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["JavaScript", "Python"],
        currentJob: "Full Stack Developer",
        email: "jackson.scott@example.com",
        image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 11. @AriaHill
    {
        name: "Aria Hill",
        skills_needed: ["Python", "Cloud Architecture"],
        certified_in: ["JavaScript", "Frontend Development"],
        currentJob: "DevOps Engineer",
        email: "aria.hill@example.com",
        image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 12. @CarterGreen
    {
        name: "Carter Green",
        skills_needed: ["IoT", "Python"],
        certified_in: ["Python", "Cybersecurity"],
        currentJob: "Embedded Systems Engineer",
        email: "carter.green@example.com",
        image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 13. @ScarlettBaker
    {
        name: "Scarlett Baker",
        skills_needed: ["HTML or CSS", "Frontend Development"],
        certified_in: ["JavaScript", "Python"],
        currentJob: "Freelance Technical Writer",
        email: "scarlett.baker@example.com",
        image: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 14. @LeoEvans
    {
        name: "Leo Evans",
        skills_needed: ["Python", "JavaScript"],
        certified_in: ["Frontend Development", "Cybersecurity"],
        currentJob: "Agile Coach",
        email: "leo.evans@example.com",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 15. @MiaPerez
    {
        name: "Mia Perez",
        skills_needed: ["Cybersecurity", "Python"],
        certified_in: ["Python", "JavaScript"],
        currentJob: "Security Consultant",
        email: "mia.perez@example.com",
        image: "https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 16. @LiamMiller
    {
        name: "Liam Miller",
        skills_needed: ["Data Science", "Python"],
        certified_in: ["JavaScript", "AI"],
        currentJob: "Business Intelligence Analyst",
        email: "liam.miller@example.com",
        image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 17. @LilyTurner
    {
        name: "Lily Turner",
        skills_needed: ["SQL", "Python"],
        certified_in: ["Data Science", "Big Data"],
        currentJob: "Java Developer",
        email: "lily.turner@example.com",
        image: "https://images.unsplash.com/photo-1664575600397-88e370cb46b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 18. @AidenKing
    {
        name: "Aiden King",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["JavaScript", "Python"],
        currentJob: "Frontend Developer",
        email: "aiden.king@example.com",
        image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 19. @ZoeGarcia
    {
        name: "Zoe Garcia",
        skills_needed: ["AI", "Machine Learning"],
        certified_in: ["Python", "Data Science"],
        currentJob: "Data Scientist",
        email: "zoe.garcia@example.com",
        image: "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 20. @GraysonMartinez
    {
        name: "Grayson Martinez",
        skills_needed: ["HTML or CSS", "Frontend Development"],
        certified_in: ["JavaScript", "UI/UX Design"],
        currentJob: "UX Designer",
        email: "grayson.martinez@example.com",
        image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 21. @GabrielBrown
    {
        name: "Gabriel Brown",
        skills_needed: ["Python", "JavaScript"],
        certified_in: ["DevOps", "CI/CD"],
        currentJob: "DevOps Engineer",
        email: "gabriel.brown@example.com",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 22. @SofiaRivera
    {
        name: "Sofia Rivera",
        skills_needed: ["Cloud Architecture", "Python"],
        certified_in: ["AWS", "JavaScript"],
        currentJob: "Cloud Solutions Architect",
        email: "sofia.rivera@example.com",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 23. @ElijahCollins
    {
        name: "Elijah Collins",
        skills_needed: ["Testing", "Python"],
        certified_in: ["Automated Testing", "JavaScript"],
        currentJob: "QA Engineer",
        email: "elijah.collins@example.com",
        image: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 24. @AaliyahLewis
    {
        name: "Aaliyah Lewis",
        skills_needed: ["Mobile App Development", "Python"],
        certified_in: ["iOS Development", "Android Development"],
        currentJob: "Mobile App Architect",
        email: "aaliyah.lewis@example.com",
        image: "https://images.unsplash.com/photo-1528953030358-b0c7de371f1f?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 25. @JustinWright
    {
        name: "Justin Wright",
        skills_needed: ["Blockchain", "Python"],
        certified_in: ["Python", "Smart Contracts"],
        currentJob: "Blockchain Consultant",
        email: "justin.wright@example.com",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 26. @AidenPerry
    {
        name: "Aiden Perry",
        skills_needed: ["AI", "Python"],
        certified_in: ["Machine Learning", "Python"],
        currentJob: "AI Evangelist",
        email: "aiden.perry@example.com",
        image: "https://images.unsplash.com/photo-1592188657297-c6473609e988?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 27. @MilaHoward
    {
        name: "Mila Howard",
        skills_needed: ["Python", "Cloud Architecture"],
        certified_in: ["Docker", "Container Orchestration"],
        currentJob: "Containerization Engineer",
        email: "mila.howard@example.com",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 28. @EzraBennett
    {
        name: "Ezra Bennett",
        skills_needed: ["Cybersecurity", "Python"],
        certified_in: ["Information Security", "JavaScript"],
        currentJob: "Security Analyst",
        email: "ezra.bennett@example.com",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 29. @BrooklynCooper
    {
        name: "Brooklyn Cooper",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["HTML or CSS", "JavaScript"],
        currentJob: "Web Developer",
        email: "brooklyn.cooper@example.com",
        image: "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 30. @JulianRivera
    {
        name: "Julian Rivera",
        skills_needed: ["AI", "Python"],
        certified_in: ["AI Ethics", "Data Governance"],
        currentJob: "AI Strategy Consultant",
        email: "julian.rivera@example.com",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 31. @PeytonEdwards
    {
        name: "Peyton Edwards",
        skills_needed: ["Cloud Architecture", "Python"],
        certified_in: ["AWS", "JavaScript"],
        currentJob: "Cloud Operations Engineer",
        email: "peyton.edwards@example.com",
        image: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // 32. @MadisonColeman
    {
        name: "Madison Coleman",
        skills_needed: ["Frontend Development", "Python"],
        certified_in: ["JavaScript", "ES6"],
        currentJob: "Frontend Developer",
        email: "madison.coleman@example.com",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
];

module.exports = { data: sampleUsers };
