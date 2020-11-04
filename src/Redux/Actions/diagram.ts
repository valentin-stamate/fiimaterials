export const FETCH_DIAGRAM = 100;
export const FETCH_DIAGRAM_SUCCESS = 101;
export const FETCH_DIAGRAM_FAILURE = 102;

export function fetchDiagram() {
    return {
        type: FETCH_DIAGRAM,
    };
}

export function fetchDiagramSuccess(payload: any) {
    return {
        type: FETCH_DIAGRAM_SUCCESS,
        payload: payload,
    };
}

export function fetchDiagramFailure(error: string) {
    return {
        type: FETCH_DIAGRAM_FAILURE,
        error: error,
    };
}
