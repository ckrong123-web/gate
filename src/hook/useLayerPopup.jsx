import { usePopupContext } from "@/context/PopupProvider";

export function useLayerPopup() {
  const { popupList, setPopupList } = usePopupContext();

  const onOpen = (value) => {
    if (!popupList.includes(value)) {
      setPopupList([...popupList, value]);
    }
  };

  const onClose = (value) => {
    if (popupList.includes(value)) {
      setPopupList(popupList.filter((item) => item !== value));
    }
  };

  return { onOpen, onClose };
}

export default useLayerPopup;
