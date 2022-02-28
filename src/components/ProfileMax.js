import ProfileImg from "../assets/img/profile-img.jpg";
import { useResizeWindows } from "../hooks/useResizeWindows";
import "./ProfileMax.css";
const ProfileMax = () => {
  const [mq] = useResizeWindows("(min-width: 1300px)");
  return (
    <button className="btn-container-profile-max">
      <figure>
        <img src={ProfileImg} alt="" />
      </figure>
      {mq ? (
        <div className="div-container-all-perfil">
          <div className="div-container-information-perfil-max">
            <article>
              <h3>Juan Pablo</h3>
              <span className="span-container-private">
                <svg viewBox="0 0 24 24" aria-label="Cuenta protegida">
                  <g>
                    <path d="M19.75 7.31h-1.88c-.19-3.08-2.746-5.526-5.87-5.526S6.32 4.232 6.13 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm-7 8.377v1.396c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.396c-.764-.3-1.307-1.04-1.307-1.91 0-1.137.92-2.058 2.057-2.058 1.136 0 2.057.92 2.057 2.056 0 .87-.543 1.61-1.307 1.91zM7.648 7.31C7.838 5.06 9.705 3.284 12 3.284s4.163 1.777 4.352 4.023H7.648z"></path>
                  </g>
                </svg>
              </span>
            </article>
            <span className="span-name-of-user">@juanpa123</span>
          </div>
          <div className="div-container-three-points">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
    </button>
  );
};

export default ProfileMax;
