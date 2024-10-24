import mongoose from "mongoose";
main()
.then((res) => {
    console.log(('connection successful'))
})
.catch(err => console.log(err))

async function main()  {
    await mongoose.connect('mongodb://localhost:27017/paytm')
}

export default main;