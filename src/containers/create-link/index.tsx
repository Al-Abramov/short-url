import CreateLinkForm from '../../components/forms/link';
import { LayoutFlex } from '../../components/layout-flex';
import ShortLink from '../../components/short-link';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCreateLink } from '../../store/statistics-slice';

export const CreateLinkContainer = () => {
  const dispatch = useAppDispatch();
  const { currentShort } = useAppSelector((state) => state.statistics);

  const createShortLink = (link: string) => {
    dispatch(fetchCreateLink(link));
  };

  return (
    <LayoutFlex flex={'start'}>
      <CreateLinkForm create={createShortLink} />
      <ShortLink short={currentShort} />
    </LayoutFlex>
  );
};
