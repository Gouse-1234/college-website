
        // JavaScript to populate syllabus details based on the selected subject
        const subjectDropdown = document.getElementById('subject');
        const syllabusDiv = document.getElementById('syllabus');

        subjectDropdown.addEventListener('change', function() {
            const selectedSubject = subjectDropdown.value;
            let syllabusDetails = '';

            // Simulated syllabus details - Replace with actual syllabus data
            if (selectedSubject === 'cs101') {
                syllabusDetails = 'Introduction to Computer Science syllabus details...';
            } else if (selectedSubject === 'cs102') {
                syllabusDetails = 'Data Structures and Algorithms syllabus details...';
            } else if (selectedSubject === 'cs103') {
                syllabusDetails = 'Database Management Systems syllabus details...';
            } else if (selectedSubject === 'eng101') {
                syllabusDetails = 'Engineering Mathematics syllabus details...';
            } else if (selectedSubject === 'eng102') {
                syllabusDetails = 'Mechanics syllabus details...';
            } else if (selectedSubject === 'eng103') {
                syllabusDetails = 'Thermodynamics syllabus details...';
            } else if (selectedSubject === 'bus101') {
                syllabusDetails = 'Principles of Marketing syllabus details...';
            } else if (selectedSubject === 'bus102') {
                syllabusDetails = 'Financial Accounting syllabus details...';
            } else if (selectedSubject === 'bus103') {
                syllabusDetails = 'Business Ethics syllabus details...';
            }

            syllabusDiv.textContent = syllabusDetails;
        });
        const importantChaptersIntroToCS = [
            "Introduction to Computers",
            "Programming Basics",
            "Algorithms and Problem Solving",
            "Programming Languages",
            "Software Engineering Principles",
            "Computer Hardware"
        ];
        
