import { Button, Dialog, TextField } from '@mui/material'
import styles from '../../styles/loginModal.module.scss'
export const SignInModal = (props) => {
  return (
    <Dialog fullScreen className={styles.modal} {...props}>
      <div>
        <div className={styles.logo}>
          <img src='/assets/icons/logo.svg' alt='' />
        </div>
      </div>
      <div className={styles.formContainer}>
        <h1>Sign In</h1>
        <form>
          <TextField id='email' label='Email' type='text' variant='standard' />
          <TextField
            id='paswword'
            label='Password'
            type='text'
            variant='standard'
          />
          <a>Create and Account</a>

          <Button variant='contained'>Sign In</Button>
        </form>
      </div>
    </Dialog>
  )
}
