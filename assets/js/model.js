class Info {
    constructor() {
        this.fullname = 'Adrian Aranilla Jaspio';
        this.bday = 'July 5, 1994';
        this.age = ko.observable(moment().diff(this.bday, 'year'));
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
            Description: 'Update and expand existing programs. Debug programs by testing for and fixing errors-Identify user needs to create and administer databases. Backup and restore data to prevent data loss. Ensure that the database operates efficiently and without error. Make and test modifications to the database structure when needed.',
            Position: 'Fullstack Programmer',
            Duration: '2021 - Present',
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
    }
}

function Model() {
    var self = this;
    self.Info = new Info();
}

ko.applyBindings(new Model());