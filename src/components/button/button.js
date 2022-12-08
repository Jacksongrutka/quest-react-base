
const Btn = ({label , alertLabel}) => {
    return(
        <>
            <button onClick={() => {alertLabel(label)}}>{label}</button>
        </>
    )
}
Btn.defaultPros = {
    label: 'clique aqui'
}

export default Btn