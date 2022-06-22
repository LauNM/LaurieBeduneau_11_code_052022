import {Link} from "react-router-dom";

function Error() {
  return (
    <div className={'error '}>
      <p className={'type-error is-size-1'}>404</p>
      <h1 className={'title is-size-4'}>Oups! La page que vous demandez n'existe pas</h1>
      <Link to={'/'} className={'link is-size-6'}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error