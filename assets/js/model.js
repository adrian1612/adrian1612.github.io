class Info {
    constructor() {
        this.fullname = 'Adrian A. Jaspio';
        this.bday = '5 July 1994';
        this.age = ko.observable(moment().diff(this.bday, 'year'));
        this.Contact = '0977-697-3009';
        this.Address = '660 Purok 3, Bucal, Calamba City, Laguna 4027';
        this.Degree = 'Bachelor of Science In Information System';
        this.Email = 'adrianjaspio@gmail.com';
        this.website = { Name: 'adrian1612.github.io', Link: 'https://adrian1612.github.io' };
        this.profile = 'assets/img/profile.jpg';
        this.banner = 'assets/img/banner4.jpg';
        this.AboutPicture = 'assets/img/CloseUpSide2.jpg';
        this.social = [
            { 
                Name: 'facebook', 
                Link: 'https://www.facebook.com/adrian.jaspio.7', 
                Icon: 'bi bi-facebook',
                Class: 'facebook'
            }, 
            { 
                Name: 'linkedin', 
                Link: 'https://www.linkedin.com/in/adrian-jaspio-a61923188/', 
                Icon: 'bi bi-linkedin',
                Class: 'linkedin'
            },
            { 
                Name: 'youtube', 
                Link: 'https://www.youtube.com/codetechnique',
                Icon: 'bi bi-youtube',
                Class: 'youtube'
            },
        ];
        this.education = [{
            Degree: 'Bachelor of Science in Information System',
            School: 'Calayan Educational Foundation Inc.',
            Year: '2017',
            Address: 'Red-V Lucena City, Philippines.'
        },
        {
            Degree: 'Secondary',
            School: 'Lucena City National Highschool',
            Year: '2012',
            Address: 'Brgy. Ibabang Dupay, Red-V Lucena City, Philippines.'
        },
        {
            Degree: 'Primary',
            School: 'East VIII Elementary School',
            Year: '2008',
            Address: 'Lucena Heights Subdivision, Iba, Dupay, Lucena City, Quezon'
        }];
        this.workExperience = [{
            Company: 'MAYO HOLDINGS AND CONSTRUCTION (MHC), INC.',
            Description: 'As an MIS Supervisor, I oversee the company’s Management Information Systems, ensuring smooth operations, data security, and system efficiency. My role includes managing IT infrastructure, optimizing database structures, and supervising a team of programmers and IT specialists. I contribute to strategic planning, implement technological improvements, and ensure that our systems align with business objectives.',
            Position: 'MIS Supervisor',
            Duration: 'Jul 2024 - Present',
            Address: 'KM 94 Brgy Milagrosa Calamba city, Laguna'
        }, {
            Company: 'MAYO HOLDINGS AND CONSTRUCTION (MHC), INC.',
            Description: 'After being promoted to Senior Programmer, I took on greater responsibilities in system architecture, code optimization, and mentoring junior developers. I played a key role in designing and implementing complex features, improving development workflows, and ensuring code quality. My expertise in C# ASP.NET MVC allowed me to enhance application performance and security while leading crucial development projects.',
            Position: 'Senior Programmer',
            Duration: 'September 2023',
            Address: 'KM 94 Brgy Milagrosa Calamba city, Laguna'
        }, {
            Company: 'MAYO HOLDINGS AND CONSTRUCTION (MHC), INC.',
            Description: 'As a Fullstack Programmer, I was responsible for developing and maintaining web applications using C# ASP.NET MVC. I handled both frontend and backend development, ensuring seamless integration between user interfaces and databases. My role involved troubleshooting issues, optimizing code performance, and collaborating with other teams to deliver efficient software solutions.',
            Position: 'Fullstack Programmer',
            Duration: 'April 2021',
            Address: 'KM 94 Brgy Milagrosa Calamba city, Laguna'
        }, {
            Company: 'Royal Star Appliance Marketing Inc.',
            Description: 'Perform a variety of programming assignments based on the needs of the company. Update and expand existing programs. Debug programs by testing for and fixing errors-Identify user needs to create and administer databases. Ensure that the database operates efficiently and without error.',
            Position: 'Application Programmer',
            Duration: '2020 - 2021',
            Address: 'Brgy. Parian Calamba City, Laguna'
        }];
        this.skills = [{
            Name: 'C# .NET',
            Value: 95
        }, {
            Name: 'Web Development',
            Value: 95
        }, {
            Name: 'SQL Server Database',
            Value: 95
        }, {
            Name: 'Video Editing',
            Value: 80
        }, {
            Name: 'Photoshop',
            Value: 55
        }, {
            Name: 'JQuery',
            Value: 94
        }, {
            Name: 'CSS',
            Value: 94
        }, {
            Name: 'Knockoutjs',
            Value: 97
        }, {
            Name: 'Momentjs',
            Value: 97
        }, {
            Name: 'Windows Application',
            Value: 95
        }, {
            Name: 'Wordpress/CMS',
            Value: 90
        }, {
            Name: 'Javascript',
            Value: 94
        }];
        this.nugetPublished = [{
            Title: 'AAJControl',
            Link: 'https://www.nuget.org/packages/AAJControl',
            Icon: 'https://api.nuget.org/v3-flatcontainer/aajcontrol/1.0.28/icon',
            Version: '1.0.28'
        },
        ];
        this.Projects = [{
            Title: 'Program Management System',
            Description: 'Portal thru other applications to manage the company’s projects, employees, and clients. It includes a dashboard, project management, employee management, client management, and a reporting system.',
            Imgs: [
                { title: 'Profile', src: 'assets/img/Projects/PMS/Profile.png' },
                { title: 'Dashboard', src: 'assets/img/Projects/PMS/Dashboard.png' },
                { title: 'Login', src: 'assets/img/Projects/PMS/Login.png' },
            ]
        }, {
            Title: 'HR Management System',
            Description: 'HR Management System is a web-based application that helps companies manage their human resources more efficiently. It includes dynamic company structure, employee management, Holiday, separation, and a reporting system.',
            Imgs: [
                { title: 'Dashboard', src: 'assets/img/Projects/HRMS/Dashboard.png' },
                { title: 'Employees', src: 'assets/img/Projects/HRMS/Employees.png' },
            ]
        }, {
            Title: 'Gatepass Management System',
            Description: 'Gatepass Management System is a web-based application that helps companies monitor and tract their assets.',
            Imgs: [
                { title: 'Dashboard', src: 'assets/img/Projects/Gatepass/Dashboard.png' },
                { title: 'For Appoval', src: 'assets/img/Projects/Gatepass/ForApproval.png' },
            ]
        },{
            Title: 'Accounting System',
            Description: 'Accounting System is a web-based application that helps companies manage their accounting more efficiently.',
            Imgs: [
                { title: 'Journal', src: 'assets/img/Projects/AccountingSystem/Journal.png' },
                { title: 'Chart of Account', src: 'assets/img/Projects/AccountingSystem/ChartOfAccount.png' },
            ]
        },{
            Title: 'Attendance System',
            Description: 'Timekeeping System is a web-based application that helps companies keep track of their employees attendance.',
            Imgs: [
                { title: 'Employee', src: 'assets/img/Projects/Attendance/PerEmployee.png' },
                { title: 'Dashboard', src: 'assets/img/Projects/Attendance/Dashboard.png' },
            ]
        },{
            Title: 'Purchasing',
            Description: 'Purchasing System is a web-based application that helps companies manage their purchasing more efficiently.',
            Imgs: [
                { title: 'Supplier', src: 'assets/img/Projects/Purchasing/Supplier.png' },
            ]
        },]
        this.gitRelease = [{
            Title: 'SQL Server Backup Tool',
            Description: `Backup all SQL Server databases to a specified folder. It can also restore the database from the backup file.`,
            Link: 'https://github.com/adrian1612/SQLBak/releases/tag/sqlbak'
        }];
        this.randomInterval = function () {
            var min = 1500, max = 5000;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}

function Model() {
    var self = this;
    self.Info = new Info();
}

ko.applyBindings(new Model());