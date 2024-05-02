// @kdoc-main-view@

import styled from '@emotion/styled';
import {
  kosComponent,
  KosLog,
} from '@kosdev-code/kos-ui-sdk';

const log = KosLog.createLogger({ name: 'main-view' });
log.debug('main-view component loaded');

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  .logo {
    width: 300px;
  }
`;

export const MainView: React.FunctionComponent = kosComponent(() => {
  return (
    <Main>
      <div className="logo">
        {/* kOS LOGO */}
        <img src="./assets/kos-logo.svg"></img>
      </div>
      {/* Writing "Hello World" */}
      <h2>Hello World!</h2>
    </Main>
  );
});

// @kdoc-main-view@