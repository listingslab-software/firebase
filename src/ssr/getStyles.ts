/* eslint max-len: "off" */

export const getStyles = (): string => {
  return `<style>
            html {
              height: 100%;
            }
            body {
                background-image: linear-gradient(#edf6f5, #bcc3c2);
                border: 0;
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: lighter;
            }
            ul, li {
              list-style: none;
            }
            a {
              color: #126970;
              text-decoration: none;
            }
            #ssr{
              display: flex;
              max-width: 600px;
              margin: auto;
              padding: 8px;
            }
            #ssr .logo{
              padding-top: 25px;
              padding-right: 16px;
            }
            
          </style>`;
};
