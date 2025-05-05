import styled from 'styled-components';

// Definimos los estilos para cada variante en un objeto
const tagVariants = {
  default: {
    backgroundColor: '#DFE1E6',
    color: '#42526E',
  },
  red: {
    backgroundColor: '#f8ebef',
    color: '#d56687'
  },
  purple: {
    backgroundColor: '#EAE6FF',
    color: '#403294',
  },
  blue: {
    backgroundColor: '#e4f8fc',
    color: '#59a6db',
  },
  gray: {
    backgroundColor: '#f4fafb',
    color: '#929ba7',
  },
  green: {
    backgroundColor: '#eefaf1',
    color: '#cee2b2'
  }
};

// Componente Tag con estilos dinámicos basados en la prop variant
const TagWrapper = styled.span`
  text-align: center;
  width: 120px;
  border-radius: 50px 50px 50px 50px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) =>
    tagVariants[props.variant]?.backgroundColor || tagVariants.default.backgroundColor};
  color: ${(props) =>
    tagVariants[props.variant]?.color || tagVariants.default.color};
`;

export const Tag = ({variant, children})=> {
  return(
    <>
      <TagWrapper variant={variant}>
        {children}
      </TagWrapper>
    </>
  )
}