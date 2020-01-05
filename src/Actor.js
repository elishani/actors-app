    export    class Actor {
            constructor(FirastName, LastName, Birthday, Image) {
                this.FirastName = FirastName;
                this.LastName = LastName;
                this.Birthday = Birthday;
                this.Image = Image;
            }
            age() {
                const currentYear = new Date().getFullYear();
                const age = currentYear - new Date(this.Birthday).getFullYear();
                return age;
            };
        }