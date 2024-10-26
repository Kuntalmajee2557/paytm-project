import zod from 'zod'

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

const signinBody = zod.object({
    username: zod.string(),
    password: zod.string(),
})

const upadateUserBody = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

const transferBody = zod.object({
    userId: zod.string(),
    amount: zod.number().positive()
})
export {signinBody, signupBody, upadateUserBody, transferBody};