import * as Styles from "../styles/components/Logo";

const Logo = () => {
  return (
    <Styles.Container>
      <Styles.Logo
        source={require("../assets/images/somalogo.png")}
        resizeMode="contain"
      />
    </Styles.Container>
  );
};

export default Logo;
