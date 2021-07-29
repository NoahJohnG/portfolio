import { ComponentCustomProperties } from "vue";
import { Store } from "vuex"

declare module "@vue/runtime-core" {
    interface State {
        projectList: Array<ProjectDescription>;
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}