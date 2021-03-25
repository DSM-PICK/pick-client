import { requesetRefreshForDesktop } from "../../../lib/requestApi";

export const addAttendanceChangeStudentErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
      break;
    }
    case 401: {
      break;
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 410: {
      await requesetRefreshForDesktop(callback);
    }
  }
};

export const deleteAttendanceChangeListErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("없는 데이터 입니다.");
      break;
    }
    case 410: {
      await requesetRefreshForDesktop(callback);
      break;
    }
  }
};

export const putAttendanceChangeStudentErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
      break;
    }
    case 401: {
      break;
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 410: {
      await requesetRefreshForDesktop(callback);
      break;
    }
  }
};

export const getAllAttendanceChangeListErrorHandler = callback => async error => {
  switch (error) {
    case 400: {
      alert("입력된 값들 중 입력되지 않은 값이 있습니다.");
      break;
    }
    case 401: {
      try {
        await requesetRefreshForDesktop(callback);
      } catch (error) {
        throw error;
      }
      break;
    }
    case 403: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 404: {
      alert("결과를 찾을 수 없습니다.");
      break;
    }
    case 410: {
      try {
        await requesetRefreshForDesktop(callback);
      } catch (error) {
        throw error;
      }
      break;
    }
  }
};
