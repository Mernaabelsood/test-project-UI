import React from "react";

const currentCourses = [
  {
    title: "Introduction to Data Science",
    desc: "Learn the basics of data analysis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJqNjyrxhszLVMhoCuNoRQvKiQ7N75gNTRHpJ1pdhSKtrbFJ58VZkelBA_uhDfnji0bG0T3H1lv-ExB3LkA6obdBNKODKZHVD3kd9BFZybdkl41roJDNtmIKLXx0YRB4qVFvYYNNVApNPre7rgJC1Ik_A7ZZeM_dfAPcDzjnelKFo0I_-4nupnwDD1to4tHIwIBKA3vRe-FBsWvasHjBxxQ_Z2aR0o-iXmBIHUnEQ_HKJ-_znAdK_0i8Q7er8htlCJbpBTJ-Gkq_s_",
    progress: 65,
  },
  {
    title: "Advanced Python Programming",
    desc: "Master advanced Python concepts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4NgImCgMFwx8HDdhIn538802yqrUHiJWw-MV5KjeExhEu4WMiRGgV2zLNSpcw8dC5bISNiQsBfRwQukeH_zFcdN0Soqo9rOekJrqlKhv2cNS4cCwP3qqBLfojnV3rWkgmjwI1v-K1DSRCijcHqd-DNnMnN8W3J-sC-c4e_RyQlGFVDIGLk1C-xjDVHtxOmsL45WJsK1xxiEBljCOf7fu66pZzYz4ADn8zvOoq8w0QDSaBJVTCm0T_Ud9BJIQHAQDdbUDo4L4ZcVT3",
    progress: 40,
  },
  {
    title: "Digital Marketing Fundamentals",
    desc: "Explore digital marketing principles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0pNZvivi3rxgzmT4tuNovoO35SEP1ertZU8XalJTMuD6cBSrf3MFSPmtfPEFHjBui98qyX_1RkquOsAUflsmC3h2oD-mih7jEehSdfulypqti1HwVvpCYEShkiFZQZ-dx9h4_iZKkgyIb1R5dCXNNx-s1m04FKpScoaQYZ6B0siMGYgBwr4EFkpxbITJQfKF38oacsPu7YRz8meQA15oWnGJGQhwGY7-u5jDRxOt8uzR5peo6T_gPi4HEBWD8ZuAscIXy2g8rzrGJ",
    progress: 80,
  },
];

const recommended = [
  {
    title: "Machine Learning Essentials",
    desc: "Dive into ML algorithms.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmTbOQFudyHAZZE_7ANiTnBlkrX6fgbcY-Up73NIvoavaQWxgr98Rj5kX4MJAE1tW4TWXaa-uamLCxjn74x2uNMcXcVzuQ_Q68yT0NFuYkSeHADAy392P-Zbj37Aeh-duJx1T3L8FLBChsCjYXBWkpJVknY58EUQNEn_uhLOFznSKAjXnsO5eN-f5IGI9LNWynEjSwlkbH9qsdSMKCq-pK6RB3hAKkJb0Pvr3EuIdgtStQ0r955fBZvMp6vLlafSSGzs5wk39xZsZu",
  },
  {
    title: "Web Development with React",
    desc: "Build interactive web apps.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG3msgS6tQB_mUzTxvmWiJjfd1VqQx4tczHdrYDOk-_tInl4tt0PdJcSbuZy7LsiTNwoSqMA265nwlp0s2ljQ07xVETB46WOXhm0Ar7w3HpF7Nl2soDTWwlVsahfwEiz_6gBj5W07v_twifiQen80jHrGZXYp9pd0iRb0SXHUyh3GhzyzVXEnFk9nu4-CWR4pi8UKYjRMPNc0xn14PmUE1fcetyHE8yu_04Y5nYZwFJAbA4iM2bnD1x0OXSLenqwfkgxcrdTIb0454",
  },
  {
    title: "Content Marketing Strategy",
    desc: "Develop effective content strategies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKHEj5uB2s7ZDyLq_j4i1jAL6ritQ6vviu0HTzD6A05pVqTQ40rd3AVOSYtWgyxj4o7LTxgkNxCFSNOsQQ6iPwjbsH2RkQE7M8qqyruPlpbrT5HZCC1tXRZ9UuwwV0H8n1gKZTRa6galzQSzaJCT6rYq3nqytaiwKGajAe4GsvhX-vmR_Vffo3_Y_vjC2Pe4hqFmREtnRvr6LwDqra6u8TJHc5QUD4yIM9PrYrlF_69ZMn8-PyVz46t2KeHIVKtLGIHRHwhBXn6qos",
  },
];

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-6 py-8 sm:px-10 bg-[var(--bg-secondary)]">
      <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        My Learning
      </h1>
      <div className="mt-10 grid gap-10">
        {/* Current Courses */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Current Courses
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentCourses.map((course) => (
              <div
                key={course.title}
                className="transform-gpu overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${course.image}')` }}
                ></div>
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {course.desc}
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-teal-400"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Recommended For You */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Recommended For You
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recommended.map((rec) => (
              <div
                key={rec.title}
                className="transform-gpu overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="aspect-video w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${rec.image}')` }}
                ></div>
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {rec.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {rec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Learning Activity */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Learning Activity
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Course Completion
              </h3>
              <p className="text-4xl font-bold text-[var(--text-primary)]">
                75%
              </p>
              <div className="flex items-center gap-2 text-sm">
                <p className="text-[var(--text-secondary)]">Last 30 Days</p>
                <p className="font-medium text-green-600">+10%</p>
              </div>
              <div className="mt-6 flex h-48 items-end justify-between gap-4 px-2">
                <div className="flex h-full w-full flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-full bg-[var(--primary-color)]"
                    style={{ height: "90%" }}
                  ></div>
                  <p className="text-xs font-medium text-[var(--text-secondary)]">
                    Week 1
                  </p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-full bg-[var(--primary-color)]"
                    style={{ height: "30%" }}
                  ></div>
                  <p className="text-xs font-medium text-[var(--text-secondary)]">
                    Week 2
                  </p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-full bg-[var(--primary-color)]"
                    style={{ height: "50%" }}
                  ></div>
                  <p className="text-xs font-medium text-[var(--text-secondary)]">
                    Week 3
                  </p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-full bg-teal-400"
                    style={{ height: "70%" }}
                  ></div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">
                    Week 4
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Achievements
                </h3>
                <p className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
                  12
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  New badges earned
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Hours Learned
                </h3>
                <p className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
                  28
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  This month
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
