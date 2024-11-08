

interface Profile {
    name: string;
    age: number;
    email: string;
}

type PartialType = Partial<Profile>

function updateProfile(param1: Profile, param2: PartialType) {
    const updatedProfile = { ...param1, ...param2 };
    return updatedProfile;
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
