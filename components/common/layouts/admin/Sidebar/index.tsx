import { IconFilePlus, IconNotes, IconUsers, IconBook } from "@tabler/icons";
import Link from "next/link";
import styles from "styles/admin.module.scss";

const Sidebar = () => {
  return (
    <aside className="w-[250px] mt-[88px] h-screen px-5 text-sm">
      {/* Manage posts */}
      <div className={styles.sidebarGroup}>
        <p className="font-bold mb-3">Manage Posts</p>
        <Link href="/admin/posts/create">
          <div>
            <div className="hover:bg-[#ede7f6] cursor-pointer transition ease-in-out delay-50 flex items-center p-3 gap-4 rounded-lg hover:text-[#673ab7] ">
              <IconFilePlus size={22} strokeWidth={2} />
              <span>Add a post</span>
            </div>

            <div className="hover:bg-[#ede7f6] cursor-pointer transition ease-in-out delay-50 flex items-center p-3 gap-4 rounded-lg hover:text-[#673ab7] ">
              <IconNotes size={22} strokeWidth={2} />
              <span>List posts</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Manage subscriber */}
      <div>
        <p className="font-bold mb-3">Manage Common</p>
        <Link href="/admin/posts/create">
          <div>
            <div className="hover:bg-[#ede7f6] cursor-pointer transition ease-in-out delay-50 flex items-center p-3 gap-4 rounded-lg hover:text-[#673ab7] ">
              <IconUsers size={22} strokeWidth={2} />
              <span>Subscribers</span>
            </div>

            <div className="hover:bg-[#ede7f6] cursor-pointer transition ease-in-out delay-50 flex items-center p-3 gap-4 rounded-lg hover:text-[#673ab7] ">
              <IconBook size={22} strokeWidth={2} />
              <span>Categories</span>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
