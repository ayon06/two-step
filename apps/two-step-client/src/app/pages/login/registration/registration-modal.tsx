import { Modal, ModalProps, Step, StepLabel, Stepper } from '@mui/material'
import { useRegistration } from './useRegistration'

export interface RegistrationModalProps extends Pick<ModalProps, 'open' | 'onClose'> {
  id: string
}

export const RegistrationModal = ({ open, onClose, id }: RegistrationModalProps) => {
  const {
    createNewUser,
    currentStep,
    defaultNewUserForm,
    handleSubmitCreateUserForm,
    handleSubmitRegistrationForm,
    onSubmiRegistrationForm,
    registerCreateUserForm,
    registerRegistrationForm,
    setCreateUserValues,
    setCurrentStep,
    setRegistrationValues,
  } = useRegistration()

  return (
    <Modal open={open} onClose={onClose}>
      <Stepper activeStep={currentStep}>
        <Step active={currentStep === 0}>
          <StepLabel>Registration</StepLabel>
        </Step>
        <Step active={currentStep === 1}>
          <StepLabel>User Details</StepLabel>
        </Step>
        <Step active={currentStep === 2}>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
    </Modal>
  )
}
