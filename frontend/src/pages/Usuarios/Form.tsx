import Button from '../../components/Button';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import styles from './Form.module.scss';

function FormUsuarios() {
	const nomeInput = useForm({});
	const nascimentoInput = useForm({});
	const emailInput = useForm({});
	const cpfInput = useForm({ type: 'cpf' });
	const telefoneInput = useForm({ type: 'phone' });


	return <div className={styles.form_container}>
		<form className={styles.form}>
			<h2>Cadastro de usuários</h2>
			<Input type="text" placeholder='Nome' required />
			<Input type="date" placeholder='Nascimento' />
			<Input type="email" placeholder='Email' required />
			<Input type="text" placeholder='CPF' maxLength={14} {...cpfInput} />
			<Input type="text" placeholder='Telefone' maxLength={15}  {...telefoneInput} />
			<Button>Cadastrar</Button>
		</form>
	</div>;
}

export default FormUsuarios;
