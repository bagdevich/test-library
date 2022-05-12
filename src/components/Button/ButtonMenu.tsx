import * as React from "react";
import ExpandMore from "@material-ui/icons/ExpandMoreRounded";
import MenuItem, { MenuItemProps } from "@material-ui/core/MenuItem";
import { MenuProps } from "@material-ui/core";

import Button, { TButton } from "./Button";

import useStyles, { StyledMenu } from "./ButtonMenu.styles";

interface IButtonMenu {
  styleClass: TButton["styleClass"];
  buttonBackgroundColor?: TButton["backgroundColor"];
  buttonClasses?: TButton["rootClasses"];
  menuClassName?: MenuProps["className"];
  showExpandIcon?: boolean;
  anchorOrigin?: any;
  transformOrigin?: any;
}

type ItemType = React.FC<MenuItemProps<"li", { button?: true }>>;
type ButtonMenuType = React.FC<IButtonMenu> & { Item: ItemType };

type ReactChild = React.ReactElement<any>;

export const ButtonMenu: React.FC<ButtonMenuType> = ({
  children,
  buttonClasses,
  styleClass,
  buttonBackgroundColor,
  menuClassName,
  showExpandIcon = true,
  anchorOrigin,
  transformOrigin,
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = (e) => {
    e.stopPropagation();

    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    if (anchorRef.current?.contains(event?.target)) {
      return;
    }
    setOpen(false);
  };

  const { content, menuItems } = React.useMemo(() => {
    const contentRes = [];
    const menuItemsRes = [];

    React.Children.forEach(children, (child: JSX.Element) => {
      if (
        React.isValidElement(child) &&
        (child.type as { displayName?: string }).displayName === "Item"
      ) {
        menuItemsRes.push(
          React.cloneElement(child as ReactChild, {
            onClick: (event) => {
              handleClose(event);
              event.stopPropagation();

              (
                child.props as {
                  onClick: React.MouseEventHandler<HTMLLIElement>;
                }
              ).onClick(event);
            },
          })
        );
      } else {
        contentRes.push(child);
      }
    });

    return { content: contentRes, menuItems: menuItemsRes };
  }, [children]);

  return (
    <>
      <Button
        ref={anchorRef}
        id="actions-button"
        aria-controls="menu-actions-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        styleClass={styleClass}
        rootClasses={buttonClasses}
        backgroundColor={buttonBackgroundColor}
        onClick={handleToggle}
      >
        {content}
        {showExpandIcon && (
          <ExpandMore
            className={classes.expandIcon}
            role="button"
            aria-hidden="true"
          />
        )}
      </Button>

      <StyledMenu
        disableScrollLock
        id="menu-actions-button"
        anchorEl={anchorRef.current}
        getContentAnchorEl={null}
        open={open}
        onClose={handleClose}
        className={menuClassName}
        {...(anchorOrigin ? { anchorOrigin } : {})}
        {...(transformOrigin ? { transformOrigin } : {})}
      >
        {menuItems}
      </StyledMenu>
    </>
  );
};

const Item: ItemType = ({ children, onClick, ...props }) => {
  return (
    <MenuItem onClick={onClick} {...props}>
      {children}
    </MenuItem>
  );
};

Item.displayName = "Item";
ButtonMenu.Item = Item;

export default ButtonMenu;
