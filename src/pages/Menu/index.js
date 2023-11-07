import CustomButton from "../../../components/CustomButton";

export default function Menu()
{
    return(
        <>
        <CustomButton text={'Camera'} route={'Camera1'} />
        <CustomButton text={'Login'} route={'SignIn'} />
        <CustomButton text={'Entrada'} route={'welcome'} />
        <CustomButton text={'Camera'} route={'Camera1'} />
        </>
    )
}