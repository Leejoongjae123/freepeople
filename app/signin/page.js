
import GoogleSignInButton from '../../components/GoogleSignInButton'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

const SignInPage = () => {
  
  return (
    <div className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight text-gray-900'>
            Sign in to your account
          </h1>
        </div>
        <div className='sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24'>
          <form>
            

          </form>

          <div className='flex flex-col gap-y-5'>
            <GoogleSignInButton />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SignInPage
