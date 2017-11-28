 

 const user1 = {
                name: "Brett",
                email: "bvandorn@lesley.edu",
                gender: "male",
                age: 26
            }
            const user2 = {
                name: "Joe",
                email: "joe@lesley.edu",
                gender: "male",
                age: 21
            }

            const users = [user1, user2];

            // Loops
            // for loop
          let i;
          for (i = 0; i < users.length; i++) {
              let user = users[i];
              console.log(user.name + " is " + user.age + " years old");
              console.log(`${user.name} is ${user.age} years old`);
          }