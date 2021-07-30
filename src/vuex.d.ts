import { ViewName, ProjectDescription } from "@/types"
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex"

declare module "@vue/runtime-core" {
    interface State {
        projectList: Record<ViewName, ProjectDescription>;
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}