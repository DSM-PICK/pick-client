import React from 'react';
import AdminBody from '../AdminBody/AdminBody';
import AdminBodyFunc from '../AdminBody/AdminBodyFunc/AdminBodyFunc';
import AdminBodyTitle from '../AdminBody/AdminBodyTitle/AdminBodyTitle';
import AdminNav from '../AdminNav/AdminNav';
import * as S from './styles';

const AdminPrint = () => {
	return (
		<S.Container>
			<AdminNav />
			<AdminBody>
				<AdminBodyTitle title="출석기록 출력" />
				<AdminBodyFunc>
					<S.AbsoluteBackground>
						<S.AbsoluteImg imglink={'/src/asset/Admin/AdminPrint.svg'} />
						<S.DownloadTag>
							<S.DownloadImg
								imglink={'/src/asset/Admin/AdminClubDownload.svg'}
							></S.DownloadImg>
							<S.DownloadBtn type="button" value="파일 다운로드" />
						</S.DownloadTag>
					</S.AbsoluteBackground>
				</AdminBodyFunc>
			</AdminBody>
		</S.Container>
	);
};

export default AdminPrint;
