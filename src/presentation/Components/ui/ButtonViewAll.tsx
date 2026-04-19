
const ButtonViewAll = ({action, text}: {action: () => void, text: string}) => {




      return (

            <section className=" w-full flex justify-center ">

            <button className=" py-3 px-8 my-8 bg-red text-white text-xs rounded-sm " onClick={action}>
                  {text}
            </button>
            </section>
      )
}

export default ButtonViewAll

/* 


AQUI NESECITO RESETAR LA LISTA DE CATEGORIAS*/