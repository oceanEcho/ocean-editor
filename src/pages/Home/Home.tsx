import React from 'react';
import { FunctionComponent } from 'react';

import { Layout } from '../../components/Layout';
import { Panel } from '../../components/Panel';
import { Content } from '../../components/Layout/Content';
import { routes } from '../../App/routes';
import { CustomLink } from '../../components/CustomLink';
import { Icon } from '../../components/Icon';
import { Row, Col } from '../../components/Row';
import { Loader } from '../../components/Loader';

export const Home: FunctionComponent<{}> = () => {
  return (
    <>
      <Loader loading/>
      <Layout>
        <Content>
          <Row fullwidth>
            <Col col={6}>
              <Row fullwidth>
                <Col>
                  <Panel>
                    <CustomLink to={`${routes.DOCUMENT.path}/0`}>
                      <Icon type="file"></Icon> New document
                    </CustomLink>
                  </Panel>
                </Col>
              </Row>
              <Row fullwidth>
                <Col>
                  <Panel>
                    <CustomLink to={`${routes.DOCUMENT.path}/0`}>
                      <Icon type="folder" /> Open document
                    </CustomLink>
                  </Panel>
                </Col>
              </Row>
              <Row fullwidth>
                <Col>
                  <Panel>
                    <CustomLink to={`${routes.DOCUMENT.path}/0`}>
                      <Icon type="file" /> Add discipline
                    </CustomLink>
                  </Panel>
                </Col>
              </Row>
              <Row fullwidth>
                <Col>
                  <Panel>
                    <CustomLink to={`${routes.DOCUMENT.path}/0`}>
                      <Icon type="edit" /> Add note
                    </CustomLink>
                  </Panel>
                </Col>
              </Row>
            </Col>
            <Col col={6}>
              <Panel>
                Incididunt ipsum ut tempor nulla ipsum proident ad nulla ex. Fugiat ullamco do minim minim do ullamco.
                Quis occaecat quis cillum cillum. Voluptate commodo qui cupidatat cillum incididunt anim adipisicing eu
                anim dolor culpa est tempor consectetur. Commodo officia eu irure ipsum consequat voluptate labore sint
                irure anim velit esse excepteur. Veniam laborum et officia exercitation ullamco enim est esse labore
                eiusmod magna ex in sint. Eu est proident magna elit culpa amet incididunt. Do anim mollit consectetur
                labore consequat excepteur sit exercitation ad voluptate dolore aute amet magna. Eiusmod in aliquip esse
                aliqua sint magna et. Officia amet elit ea adipisicing ex id esse et qui et eiusmod quis mollit sit.
                Officia consectetur ullamco mollit proident sit incididunt labore aute amet ea nostrud officia veniam.
                Mollit consequat aliqua qui ullamco voluptate pariatur esse dolor quis ex dolor. Esse exercitation
                voluptate velit do veniam quis elit consequat. Nulla culpa occaecat commodo excepteur duis ullamco
                incididunt id aliquip. Incididunt do sit quis consequat tempor Lorem occaecat sunt deserunt incididunt
                qui eu. Dolore nostrud ad aliquip ut pariatur occaecat voluptate ad aliqua eu pariatur et proident.
                Magna nisi ea pariatur quis nisi ea occaecat ipsum. Ex sint non aute velit laborum laboris dolore
                consectetur cillum. Minim consectetur irure culpa consectetur esse irure nostrud elit proident proident
                nisi pariatur. Nulla eiusmod aliqua laborum cillum id. Aliqua quis amet reprehenderit amet.
              </Panel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col col={8}>
              <Panel>
                Aute cupidatat magna adipisicing dolore laboris consequat anim quis qui. In et velit adipisicing id et
                commodo incididunt reprehenderit ut elit qui laboris veniam non. Fugiat adipisicing ad nulla aliqua
                adipisicing fugiat irure sint. Sint ipsum magna eu ex eiusmod nisi cillum excepteur ea consequat non
                quis. Ea in minim consectetur labore cillum exercitation nulla pariatur eu esse. Anim fugiat occaecat
                veniam ad sint ex labore culpa ut velit. Ea dolore do aliquip ex laborum consectetur adipisicing. Ex
                anim magna commodo qui non duis in deserunt irure minim consequat. Culpa officia duis pariatur et
                voluptate consectetur ullamco.
              </Panel>
            </Col>
            <Col col={4}>
              <Panel>
                Sit dolor dolore nisi minim nisi dolor ad qui pariatur nostrud sunt non. Quis non fugiat labore elit
                nulla est exercitation quis velit enim. Dolor officia aute culpa mollit et qui fugiat qui laborum.
                Excepteur aute sit voluptate occaecat tempor aute. Eiusmod aliquip tempor mollit cupidatat adipisicing
                anim est. Veniam eu amet adipisicing deserunt commodo aliqua aliquip incididunt voluptate fugiat
                consequat labore dolor adipisicing. Incididunt mollit sint sit ullamco aliquip qui do laborum. Laboris
                enim fugiat nisi minim quis commodo laboris. Mollit adipisicing fugiat irure enim veniam. Esse dolor
                aute nostrud dolore occaecat veniam minim sint mollit deserunt. Esse dolore voluptate ad ut ipsum dolor
                voluptate. Sint sit officia officia laboris duis sit dolor proident proident culpa ipsum tempor laborum
                consequat. Quis cupidatat consectetur nisi duis occaecat irure. Eu fugiat in quis proident dolor amet
                aute aute non. Fugiat esse ea aliquip irure voluptate adipisicing dolor sit ex pariatur tempor
                exercitation reprehenderit.
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
