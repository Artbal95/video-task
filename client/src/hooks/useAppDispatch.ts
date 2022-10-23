// Node Modules
import { useDispatch } from 'react-redux'
// App Store types
import { AppDispatch } from '../store'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch