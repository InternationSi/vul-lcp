/*
 * @Author: sfy
 * @Date: 2022-10-22 21:34:52
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-18 21:45:10
 * @FilePath: /vulture/src/designer/layout/index.tsx
 * @Description: update here
 */
import { defineComponent, ref } from "vue";
import Grid from "../grid";
import leftDash from "./components/leftDash";
import "./index.scss";
import { useRouter } from "vue-router";
import { createUseStyles } from "vue-jss";

const useStyles = createUseStyles({
  renderBox: {
    position: "absolute",
    right: "0px",
    zIndex: 10,
  }
});

export default defineComponent({
  components: { Grid, Notification, leftDash },

  setup() {
    const router = useRouter();
    const layoutVal = ref()
    const classesRef = useStyles();
    const setRender = () => {
      const result = JSON.stringify(layoutVal.value.layout)
      localStorage.setItem('pageSchema', result)
      router.push("/render");
    };
    return () => (
      <div class="common-layout">
        <el-container>
          <el-container class="main-layout">
            <el-aside width="70px">
              <leftDash />
            </el-aside>
            <el-main class="main-main">
              <div class={classesRef.value.renderBox}>
                <el-icon size={30}>
                  <video-play onClick={setRender} />
                </el-icon>
              </div>
              <Grid ref={layoutVal} />
            </el-main>
          </el-container>
        </el-container>
      </div>
    );
  }
});
