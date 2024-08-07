import { getInitials } from "../utils/helper"

const ProfileInfo = ({onLogout,userInfo}) => {

  return (
    userInfo &&
    (
      <div className="flex items-center gap-3">
        <div className='hidden sm:flex w-12 h-12 items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
          {getInitials(userInfo.fullName)}
        </div>
        <div>
          <p className="hidden sm:block font-medium text-sm">{userInfo.fullName}</p>
          <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
        </div>
      </div>
    )

  )
}
export default ProfileInfo