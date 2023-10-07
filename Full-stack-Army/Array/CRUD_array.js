/*
    Requirements:
    -------------
        - Create an array of 10 students
        - id
        - name
        - email

*/

/* 
    Advantage and disadvantage of using array
        - Easily Traverse
        - Filter
        - Delete
        - Update (medium)
        - Create a new one.
            [ push -> easy O(1), unshift -> expensive task; O(n) ]

*/

// Random uuid generate
randomUuid = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
    /[xy]/g,
    (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    }
  );
};

// Create students array
const students = [
  {
    id: "fa30d7de-7164-41c1-9274-6470da058458",
    name: "Jobayer",
    email: "jobayer@gmail.com",
  },
  {
    id: "cf3b822f-239d-4443-a923-6eef71821f2d",
    name: "Taima",
    email: "@gmail.com",
  },
  {
    id: "597d4662-4f91-4225-b65d-5bc09c95c0bc",
    name: "Jara",
    email: "jara@gmail.com",
  },
];

// Create an

console.log(students);
